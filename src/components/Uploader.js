import React from 'react';
import {Upload, message} from 'antd';
import {InboxOutlined} from '@ant-design/icons';

const {Dragger} = Upload;
const onChange = (info) => {
  const {status} = info.file;
  if (status !== 'uploading') console.log(info.file, info.fileList);
  if (status === 'done') message.success(`${info.file.name} file uploaded successfully.`);
  else if (status === 'error') message.error(`${info.file.name} file upload failed.`);
}

class Uploader extends React.Component {
  render() {
    return (
      <Dragger {...this.props} onChange={onChange}>
        <p className="ant-upload-drag-icon">
          <InboxOutlined/>
        </p>
        <p className="ant-upload-text">Click or drag to upload your csv file.</p>
        <p className="ant-upload-hint">
          The upload will start once you select the file.
        </p>
      </Dragger>
    )
  }
}

export default Uploader;
