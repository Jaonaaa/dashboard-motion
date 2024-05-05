import React, { useState } from "react";

const useForm = () => {
  const [formData, setFormData] = useState({});
  const handleInputForm = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return { formData, handleInputForm };
};

export default useForm;
