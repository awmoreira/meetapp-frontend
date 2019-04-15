import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { uniqueId } from 'lodash';
import filesize from 'filesize';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import api from '../../services/api';
import MeetupsActions from '../../store/ducks/meetups';

import { Container, NewMeetupForm } from './styles';

import Button from '../../styles/components/Button';
import Checkbox from '../Checkbox';
import ImageUploader from '../ImageUploader';
import FileList from '../FileList';

class NewMeetup extends Component {
  static propTypes = {
    addMeetupRequest: PropTypes.func.isRequired,
  };

  state = {
    uploadedFiles: [],

    title: '',
    description: '',
    file_id: '',
    locale: '',
    date_event: '',

    front: false,
    back: false,
    mobile: false,
    devops: false,
    manager: false,
    marketing: false,
  };

  handleDelete = async (id) => {
    await api.delete(`files/${id}`);
    this.setState({
      uploadedFiles: this.state.uploadedFiles.filter(file => file.id !== id),
    });
  };

  updateFile = (id, data) => {
    const { uploadedFiles } = this.state;
    this.setState({
      uploadedFiles: uploadedFiles.map(uploadedFile => (id === uploadedFile.id ? { ...uploadedFile, ...data } : uploadedFile)),
    });
  };

  handleUpload = (files) => {
    const uploadedFiles = files.map(file => ({
      file,
      id: uniqueId(),
      name: file.name,
      readableSize: filesize(file.size),
      preview: URL.createObjectURL(file),
      progress: 0,
      uploaded: false,
      error: false,
      url: null,
    }));

    this.setState({
      uploadedFiles: this.state.uploadedFiles.concat(uploadedFiles),
    });

    uploadedFiles.forEach(this.processUpload);
  };

  processUpload = (uploadedFile) => {
    const data = new FormData();
    data.append('file', uploadedFile.file, uploadedFile.name);

    api
      .post('files', data, {
        onUploadProgress: (e) => {
          const progress = parseInt(Math.round((e.loaded * 100) / e.total));

          this.updateFile(uploadedFile.id, {
            progress,
          });
        },
      })
      .then((response) => {
        this.updateFile(uploadedFile.id, {
          uploaded: true,
          id: response.data.id,
          url: response.data.url,
        });
        this.setState({
          file_id: response.data.id,
        });
      })
      .catch(() => {
        this.updateFile(uploadedFile.id, {
          error: true,
        });
      });
  };

  handleInputChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleCheckboxChange = (e) => {
    this.setState({ [e.target.name]: e.target.checked });
  };

  handleSubmit = (e) => {
    e.preventDefault();

    const { addMeetupRequest } = this.props;

    const {
      title,
      description,
      locale,
      date_event,
      file_id,

      front,
      back,
      mobile,
      devops,
      manager,
      marketing,
    } = this.state;

    const preference = {
      front,
      back,
      mobile,
      devops,
      manager,
      marketing,
    };

    addMeetupRequest(title, description, preference, locale, date_event, file_id);
  };

  render() {
    const {
      uploadedFiles,
      title,
      description,
      locale,
      date_event,

      front,
      back,
      mobile,
      devops,
      manager,
      marketing,
    } = this.state;

    return (
      <Container>
        <NewMeetupForm onSubmit={this.handleSubmit}>
          <span>Título</span>
          <input
            name="title"
            value={title}
            onChange={this.handleInputChange}
            placeholder="Digite o título do meetup"
          />

          <span>Descrição</span>
          <input
            name="description"
            value={description}
            onChange={this.handleInputChange}
            placeholder="Descreva seu meetup"
          />

          <span>Imagem</span>
          <ImageUploader onUpload={this.handleUpload} />
          {!!uploadedFiles.length && (
            <FileList files={uploadedFiles} onDelete={this.handleDelete} />
          )}

          <span>Localização</span>
          <input
            name="locale"
            value={locale}
            onChange={this.handleInputChange}
            placeholder="Onde seu meetup irá acontecer?"
          />

          <span>Data do Evento</span>
          <input
            type="datetime-local"
            name="date_event"
            value={date_event}
            onChange={this.handleInputChange}
          />

          <span>Preferências</span>
          <ul>
            <li>
              <label>
                <Checkbox name="front" checked={front} onChange={this.handleCheckboxChange} />
                <span>Front-end</span>
              </label>
            </li>
            <li>
              <label>
                <Checkbox name="back" checked={back} onChange={this.handleCheckboxChange} />
                <span>Back-end</span>
              </label>
            </li>
            <li>
              <label>
                <Checkbox name="mobile" checked={mobile} onChange={this.handleCheckboxChange} />
                <span>Mobile</span>
              </label>
            </li>
            <li>
              <label>
                <Checkbox name="devops" checked={devops} onChange={this.handleCheckboxChange} />
                <span>Devops</span>
              </label>
            </li>
            <li>
              <label>
                <Checkbox name="manager" checked={manager} onChange={this.handleCheckboxChange} />
                <span>Gestão</span>
              </label>
            </li>
            <li>
              <label>
                <Checkbox
                  name="marketing"
                  checked={marketing}
                  onChange={this.handleCheckboxChange}
                />
                <span>Marketing</span>
              </label>
            </li>
          </ul>

          <Button size="big" type="submit">
            Salvar
          </Button>
        </NewMeetupForm>
      </Container>
    );
  }
}

const mapDispatchToProps = dispatch => bindActionCreators(MeetupsActions, dispatch);

export default connect(
  null,
  mapDispatchToProps,
)(NewMeetup);
