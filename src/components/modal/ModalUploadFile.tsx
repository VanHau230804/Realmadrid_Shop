import React, { useState, useEffect } from 'react';
import { uploadFile } from '../../services/uploadFile.service';
import { toast } from 'react-toastify';

interface UploadFileProps {
  onUploadSuccess: (files: File[]) => void;
}
interface UploadResponse {
  success: boolean;
  message?: string;
  files?: Array<{
    url: string;
    fileName: string;
    originalName: string;
    size: number;
    mimetype: string;
  }>;
}
const UploadFile: React.FC<UploadFileProps> = ({ onUploadSuccess }) => {
  const [selectedFiles, setSelectedFiles] = useState<File[]>([]);
  const [message, setMessage] = useState<string>('');
  const [isUploading, setIsUploading] = useState<boolean>(false);
  // Cleanup object URLs khi component unmount
  useEffect(() => {
    return () => {
      selectedFiles.forEach(file =>
        URL.revokeObjectURL(URL.createObjectURL(file))
      );
    };
  }, [selectedFiles]);
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files || e.target.files.length === 0) {
      setMessage('Vui lòng chọn ít nhất một ảnh.');
      return;
    }
    const files = Array.from(e.target.files);
    const validFiles = files.filter(file => {
      const isValidType = file.type.startsWith('image/');
      const isValidSize = file.size <= 5 * 1024 * 1024; // 5MB
      return isValidType && isValidSize;
    });
    if (validFiles.length !== files.length) {
      toast.warning('Một số file không hợp lệ (chỉ chấp nhận ảnh <5MB)', {
        position: 'top-right'
      });
    }
    if (validFiles.length === 0) {
      setMessage('Không có file hợp lệ nào được chọn.');
      return;
    }
    setSelectedFiles(validFiles);
    setMessage(`Đã chọn ${validFiles.length} file`);
  };

  const handleUpload = async () => {
    if (selectedFiles.length === 0) {
      setMessage('Vui lòng chọn file trước khi upload');
      return;
    }
    setIsUploading(true);
    setMessage('Đang tải lên...');
    const formData = new FormData();
    selectedFiles.forEach(images => {
      formData.append('images', images);
    });
    try {
      const res: UploadResponse = await uploadFile(formData);
      if (res.success && res.files?.length) {
        const fileUrls = res.files.map(file => file.url);
        setMessage(`Upload thành công ${fileUrls.length} file`);
        toast.success('Tải ảnh thành công!', { position: 'top-right' });
        onUploadSuccess(selectedFiles);
        setSelectedFiles([]);
      } else {
        throw new Error(res.message || 'Upload không thành công');
      }
    } catch (error) {
      console.error('Upload error:', error);
      setMessage('Upload thất bại');
      toast.error('Tải ảnh thất bại', {
        position: 'top-right'
      });
    } finally {
      setIsUploading(false);
    }
  };

  return (
    <div className="mx-auto p-4 border rounded-xl shadow-md space-y-4">
      <h2 className="text-xl font-bold">Upload ảnh</h2>
      <div className="space-y-2">
        <input
          name="images"
          type="file"
          multiple
          accept="image/*"
          onChange={handleFileChange}
          disabled={isUploading}
          className="block w-full text-sm text-gray-500
          file:mr-4 file:py-2 file:px-4
          file:rounded-full file:border-0
          file:text-sm file:font-semibold
          file:bg-blue-50 file:text-blue-700
          hover:file:bg-blue-100 disabled:opacity-50"
        />

        <button
          onClick={handleUpload}
          disabled={isUploading || selectedFiles.length === 0}
          className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 
          disabled:bg-gray-400 disabled:cursor-not-allowed"
        >
          {isUploading ? 'Đang tải lên...' : 'Tải lên'}
        </button>
      </div>

      {/* Hiển thị thông tin file */}
      {selectedFiles.length > 0 && (
        <div className="mt-4 space-y-2">
          <h3 className="font-medium">File đã chọn:</h3>
          <ul className="space-y-1">
            {selectedFiles.map((file, index) => (
              <li key={index} className="text-sm text-gray-600">
                {file.name} - {(file.size / 1024).toFixed(2)} KB
              </li>
            ))}
          </ul>
        </div>
      )}

      {message && (
        <p
          className={`text-sm ${
            message.includes('thành công') ? 'text-green-600' : 'text-gray-600'
          }`}
        >
          {message}
        </p>
      )}
    </div>
  );
};

export default UploadFile;
