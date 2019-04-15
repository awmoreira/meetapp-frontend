import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Dropzone from 'react-dropzone';

import { DropContainer, UploadMessage } from './styles';

import ImageDropzone from '../../assets/image.svg';

export default class ImageUploader extends Component {
  static propTypes = {
    isDragActive: PropTypes.bool.isRequired,
    isDragReject: PropTypes.bool.isRequired,
    onUpload: PropTypes.func.isRequired,
  };

  renderDragMessage = (isDragActive, isDragReject) => {
    if (!isDragActive) {
      return (
        <UploadMessage>
          <img alt="dropzone" style={{ width: '24px', height: '24px' }} src={ImageDropzone} />
        </UploadMessage>
      );
    }

    if (isDragReject) {
      return <UploadMessage type="error">Arquivo não suportado.</UploadMessage>;
    }

    return <UploadMessage type="success">Solte a imagem aqui...</UploadMessage>;
  };

  render() {
    const { onUpload } = this.props;

    return (
      <Dropzone accept="image/*" onDropAccepted={onUpload}>
        {({
          getRootProps, getInputProps, isDragActive, isDragReject,
        }) => (
          <DropContainer
            {...getRootProps()}
            isDragActive={isDragActive}
            isDragReject={isDragReject}
          >
            <input {...getInputProps()} />

            {this.renderDragMessage(isDragActive, isDragReject)}
          </DropContainer>
        )}
      </Dropzone>
    );
  }
}
