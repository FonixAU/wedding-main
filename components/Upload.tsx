import { useState, ChangeEvent } from 'react';
import axios from 'axios';

export default function Upload() {
  const [uploading, setUploading] = useState(false);

  const handleFileChange = async (e: ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(e.target.files || []);
    if (files.length === 0) return;

    setUploading(true);
    const uploadPromises = files.map(async (file: File) => {
      const formData = new FormData();
      formData.append('file', file);
      formData.append('upload_preset', 'wedding_uploads');

      try {
        await axios.post(
          'https://api.cloudinary.com/v1_1/dnxqeves5/upload',
          formData
        );
        return 'Upload successful';
      } catch (error) {
        console.error('Upload failed:', error);
        return 'Upload failed';
      }
    });

    const results = await Promise.all(uploadPromises);
    alert(results.every(result => result === 'Upload successful') ? 'All files uploaded successfully!' : 'Some files failed to upload.');
    setUploading(false);
  };

  return (
    <div className="flex flex-col items-center gap-4 p-4">
      <button
        onClick={() => document.getElementById('fileInput')?.click()}
        disabled={uploading}
        className="pointer z-10 mt-6 rounded-lg border border-black bg-black px-3 py-2 text-sm font-semibold text-white transition hover:bg-black/10 hover: md:mt-4 hover:text-black disabled:bg-gray-400"
      >
        {uploading ? 'Uploading...' : 'Select & Upload Files'}
      </button>

      <input
        id="fileInput"
        type="file"
        accept="image/*,video/*"
        multiple
        onChange={handleFileChange}
        className="hidden"
      />
    </div>
  );
}
