import React, { useState } from 'react';

// Define types for the props that the DragAndDrop component will receive
interface DragAndDropProps {
    stateDispatch: (file: File | null | string) => void; // Function to update the state in the parent
    supportedFormats: string[]; // List of supported file formats
    error: string | null; // Error message
    placeholder: string,
    maxFileSizeAllowed: number,
    maxNoOfFiles?: number
}

type PreviewType = {
    source: string,
    fileName: string,
    size: string
}

const DragAndDrop: React.FC<DragAndDropProps> = ({ stateDispatch, supportedFormats, error, placeholder, maxFileSizeAllowed }) => {
    const [localError, setLocalError] = useState<string | null>(null);
    const [preview, setPreview] = useState<PreviewType | null>(null); // State for image preview

    const handleDragOver = (event: React.DragEvent<HTMLDivElement>) => {
        event.preventDefault();
    };
    const handleDrop = (event: React.DragEvent<HTMLDivElement>) => {
        event.preventDefault();
        setLocalError(null); // Clear previous errors

        const droppedFile = event.dataTransfer.files[0];
        const fileType = droppedFile.type;

        // Check if the file format is supported
        if (supportedFormats.includes(fileType)) {
            if (maxFileSizeAllowed >= droppedFile.size) {
                handlePreview(droppedFile);
                stateDispatch(droppedFile); // Pass the file to the parent component through dispatch
            }
            else {
                const maxfilesize = maxFileSizeAllowed / (1024 * 1024);
                const errorMsg = `File size exceeds the permited limit. Only ${maxfilesize > 1 ? maxfilesize + 'Mb' : (maxFileSizeAllowed / 1024) + 'Kb'} is allowed.`;
                setLocalError(errorMsg);
                stateDispatch(null); // Notify the parent that the upload failed
            }
        } else {
            const errorMsg = `Unsupported file format. Only ${supportedFormats.join(', ')} are allowed.`;
            setLocalError(errorMsg);
            stateDispatch(null); // Notify the parent that the upload failed
        }
    };

    const handleFileSelect = () => {
        const fileInput = document.getElementById('file-upload') as HTMLInputElement;
        if (fileInput) {
            fileInput.click(); // Trigger the hidden input click
        }
    };

    const removeImage = () => {
        setPreview(null);
        stateDispatch(null); // Reset the parent state as well
    };

    const checkUploadedImageIsValid = (file: File) => {
        if (!supportedFormats.includes(file.type)) {
            setLocalError('Unsupported file format');
            return false;
        }
        else if (file.size > Number(maxFileSizeAllowed)) {
            const maxfilesize = maxFileSizeAllowed / (1024 * 1024);
            const errorMsg = `File size exceeds the permited limit. Only ${maxfilesize > 1 ? maxfilesize + 'Mb' : (maxFileSizeAllowed / 1024) + 'Kb'} is allowed.`;
            setLocalError(errorMsg);
            return false;
        }
        return true;
    }

    const handlePreview = (file: File) => {
        const fileReader = new FileReader();
        // Set up FileReader to read the file
        fileReader.onloadend = () => {
            const size = file.size / 1024;
            stateDispatch(fileReader.result as string);
            setPreview({ source: fileReader.result as string, fileName: file.name, size: `${size.toFixed(2)} Kb` }); // Store the base64 image preview
        };

        fileReader.readAsDataURL(file); // Read the image file as a data URL
    }

    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files ? event.target.files[0] : null;
        if (file) {
            if (checkUploadedImageIsValid(file) === false) {
                return;
            }
            handlePreview(file);
        }
    };


    return (
        <div className='py-4'>
            {preview && preview.source ? (
                <div className="relative w-full h-40 border-2 rounded-lg flex items-center justify-center  bg-gradient-to-b from-gray-800 to-white via-black/5" >
                    <img src={preview.source} alt="Uploaded" className="object-contain max-h-full max-w-full w-full rounded-lg" />
                    <div className='absolute top-0 left-0 w-full'>
                        <div className='absolute -top-7 left-0 shadow-inner shadow-xl shadow-gray-600 w-full rounded-lg text-white'>
                            <button
                                onClick={removeImage}
                                className="absolute bg-black text-white rounded-full opacity-60 text-white p-0.5 w-6 top-8 left-4 text-sm"
                            >&times;</button>
                            <span className='absolute top-8 left-12 bg-transparent text-[12px]'><p>{preview?.fileName}</p><p>{preview?.size}</p></span>
                        </div>
                    </div>
                </div>
            ) : (
                <>
                    <div
                        onClick={handleFileSelect}
                        onDragOver={handleDragOver}
                        onDrop={handleDrop}
                        className="w-full h-20 border-none bg-gray-200 rounded-lg flex items-center justify-center"
                    >
                        <p>{placeholder}</p>
                    </div>
                    <input
                        id="file-upload"
                        type="file"
                        accept=".png" // Specify supported file types here
                        onChange={handleFileChange}
                        className="hidden"
                    />
                    {localError && <p className="text-red-500 mt-2">{localError}</p>}
                    {error && <p className="text-red-500 mt-2">{error}</p>}
                </>
            )
            }
        </div>
    );
};

export default DragAndDrop;
