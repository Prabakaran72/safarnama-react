import React, { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css"; // Import styles
import apiHelper from "../../../utils/apiHelper";
import { useAuth } from '../../Auth/AuthProvider';

const TextEditor: React.FC<{onClose: ()=> void}> = ({onClose}) => {
  const [editorContent, setEditorContent] = useState<string>("");
  const experienceId = '66f0275b8d8a11de5b94c678';
  const { state, dispatch } = useAuth();
  const API = apiHelper(state, dispatch);

  const handleEditorChange = (content: string) => {
    setEditorContent(content);
  };

  const saveText = async() =>{
    // api/media/process?expId=66f906272c056318f023e4cc

        // Convert HTML to a Blob if needed (optional)
        const blob = new Blob([editorContent], { type: 'text/html' });

        // Prepare the form data to send
        const formData = new FormData();
        formData.append('filepond', blob, 'text.html');
    
          const response = await API.postFormData(`media/process?expId=${experienceId}`, formData);
          console.log("response =>", response);
  }

  return (
    <div className="w-full text-left">
      <div className="text-3xl py-4 font-semibold">Create Text</div>
      <p className="text-md pb-4 font-semibold">Type your text below, highlight text for formatting options</p>
      <ReactQuill
        value={editorContent}
        onChange={handleEditorChange}
        placeholder="Insert text here..."
        className="text-xl h-24 mb-12"
        modules={{
          toolbar: [
            ['bold', 'italic', 'underline', 'strike'],
            [{ 'header': [1, 2, false] }],
            // [{'list': 'ordered'}, {'list': 'bullet'}],
            // ['link'],
            // ['clean']                                         
          ]
        }}
      />
      <span className="flex justify-end space-x-4 p-2 pr-8">
        <button onClick={onClose} className="bg-transparent text-black border-none focus:border-none outline-none focus:outline-none">Cancel</button>
        <button onClick={saveText} className="bg-transparent text-black border-none focus:border-none outline-none focus:outline-none">Save</button>
      </span>
    </div>
  );
};

export default TextEditor;
