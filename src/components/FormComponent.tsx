import React, { useState } from 'react';
import GlassInput from './GlassInput';
import GlassSelect from './GlassSelect';
import GlassCheckboxGroup from './GlassCheckboxGroup';
import GlassButton from './GlassButton';
import { useThemeContext } from '../context/ThemeContext';
import { Loader } from 'lucide-react';
import { fetchGeminiResult } from '../api/geminiApi';
import ReactMarkdown from 'react-markdown';
import GlassTimePicker from './GlassTimePicker';

const requiredQuestions = [
  {
    label: 'Full Name',
    name: 'fullName',
    placeholder: 'Enter your full name',
    type: 'text',
    required: true,
  },
  {
    label: 'Date of Birth',
    name: 'dob',
    placeholder: 'DD-MM-YYYY',
    type: 'date',
    required: true,
  },
];

const optionalQuestions = [
  {
    label: 'Time of Birth',
    name: 'birthTime',
    placeholder: 'e.g., 10:28 AM',
    type: 'time',
    required: false,
  },
  {
    label: 'Place of Birth',
    name: 'birthPlace',
    placeholder: 'e.g., Gwalior, India',
    type: 'text',
    required: false,
  },
  {
    label: 'How are you feeling right now?',
    name: 'currentFeeling',
    type: 'select',
    options: [
      'Calm',
      'Lonely',
      'Excited',
      'Heartbroken',
      'Confused',
      'Hopeful',
      'Lost',
      'Motivated',
    ],
    required: false,
  },
  {
    label: 'What are you thinking about most these days?',
    name: 'dominantThought',
    placeholder: 'e.g., Career, Love, Purpose, Nothing...',
    type: 'text',
    required: false,
  },
  {
    label: 'What kind of energy do you want from songs/movies?',
    name: 'contentVibe',
    type: 'checkbox',
    options: [
      'Peaceful',
      'Romantic',
      'Motivational',
      'Escape from reality',
      'Emotional healing',
      'Fun / Party',
      'Spiritual / Deep',
    ],
    required: false,
  },
];

const FormComponent = () => {
  const { darkMode } = useThemeContext();
  const [formData, setFormData] = useState<Record<string, any>>({});
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<any>(null);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleCheckboxChange = (name: string, option: string, checked: boolean) => {
    setFormData((prev) => {
      const currentValues = prev[name] || [];
      if (checked) {
        return {
          ...prev,
          [name]: [...currentValues, option],
        };
      } else {
        return {
          ...prev,
          [name]: currentValues.filter((item: string) => item !== option),
        };
      }
    });
  };

  const validateForm = () => {
    for (const question of requiredQuestions) {
      if (!formData[question.name] || formData[question.name].trim() === '') {
        return false;
      }
    }
    return true;
  };



const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();

  if (!validateForm()) {
    alert('Please fill in all required fields');
    return;
  }
  console.log('Form Data:', formData);

  setLoading(true);

  try {
    const apiResult = await fetchGeminiResult(formData); // 🟢 API CALL HERE
    setResult({
      message: 'Thank you for your submission!',
      data: apiResult, // You can keep `formData` if you want original
      timestamp: new Date().toLocaleString(),
    });
  } catch (error) {
    alert('Something went wrong while generating the result.');
  } finally {
    setLoading(false);
  }
};


  const renderField = (question: typeof requiredQuestions[0] | typeof optionalQuestions[0]) => {
    switch (question.type) {
      case 'text':
      case 'date':
        return (
          <GlassInput
            key={question.name}
            label={question.label}
            type={question.type}
            name={question.name}
            placeholder={question.placeholder}
            required={question.required}
            value={formData[question.name] || ''}
            onChange={handleInputChange}
            darkMode={darkMode}
          />
        );

        case 'time':
          return (
        <GlassTimePicker
          key={question.name}
          label={question.label}
          name={question.name}
          value={formData[question.name] || ''}
          onChange={(e) => {
            // e is a React.ChangeEvent<HTMLInputElement> simulated from GlassTimePicker
            handleInputChange(e);
          }}
          darkMode={darkMode}
        />
      );

      case 'select':
        return (
          <GlassSelect
            key={question.name}
            label={question.label}
            name={question.name}
            options={question.options!}
            value={formData[question.name] || ''}
            onChange={handleInputChange}
            darkMode={darkMode}
          />
        );

      case 'checkbox':
        return (
          <GlassCheckboxGroup
            key={question.name}
            label={question.label}
            name={question.name}
            options={question.options!}
            selectedValues={formData[question.name] || []}
            onChange={handleCheckboxChange}
            darkMode={darkMode}
          />
        );

      default:
        return null;
    }
  };


  if (result) {

    return (
      <div
        style={{
          padding: 32,
          borderRadius: 32,
          backdropFilter: 'blur(30px)',
          border: darkMode ? '1px solid rgba(255,255,255,0.1)' : '1px solid rgba(255,255,255,0.3)',
          background: darkMode ? 'rgba(255,255,255,0.05)' : 'rgba(255,255,255,0.25)',
          boxShadow: '0 8px 32px rgba(0,0,0,0.3)',
          textAlign: 'center',
          animation: 'fade-in 0.8s ease-out',
          color: darkMode ? '#fff' : '#000',
        }}
      >
        <div style={{ fontSize: 64, marginBottom: 16 }}>✨</div>
        <h2 style={{ fontWeight: 'bold', fontSize: 28, marginBottom: 16 }}>Result Generated!</h2>
        <p style={{ fontSize: 18, opacity: 0.7, marginBottom: 24 }}>{result.message}</p>

        <div
          style={{
            textAlign: 'left',
            background: darkMode ? 'rgba(0,0,0,0.2)' : 'rgba(255,255,255,0.3)',
            padding: 24,
            borderRadius: 16,
            marginBottom: 24,
          }}
        >
          <h3 style={{ fontWeight: 600, marginBottom: 16 }}>Submitted Data:</h3>
          <div
  style={{
    textAlign: 'left',
    background: darkMode ? 'rgba(0,0,0,0.2)' : 'rgba(255,255,255,0.3)',
    padding: 24,
    borderRadius: 16,
    marginBottom: 24,
  }}
>
  <h3 style={{ fontWeight: 600, marginBottom: 16 }}>Submitted Data:</h3>
  {Object.entries(result.data.input).map(([key, value]) => (
    <div key={key} style={{ marginBottom: 8, opacity: 0.8 }}>
      <strong>{key}:</strong> {Array.isArray(value) ? value.join(', ') : value}
    </div>
  ))}

  <div style={{ marginTop: 24 }}>
    <h3 style={{ fontWeight: 600, marginBottom: 8 }}>Gemini Recommendation:</h3>
    <div
      style={{
        whiteSpace: 'pre-line',
        background: darkMode ? 'rgba(0,0,0,0.3)' : 'rgba(255,255,255,0.6)',
        padding: 16,
        borderRadius: 12,
        fontSize: 16,
        lineHeight: 1.5,
      }}
    >
        <ReactMarkdown >{result.data.suggestion}</ReactMarkdown>
      {/* {result.data.suggestion} */}
    </div>
  </div>

  <div style={{ marginTop: 16, fontSize: 12, opacity: 0.6 }}>
    Generated at: {result.timestamp}
  </div>
</div>

      
        </div>

        <GlassButton
          onClick={() => {
            setResult(null);
            setFormData({});
          }}
          darkMode={darkMode}
        >
          Start New Form
        </GlassButton>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      style={{
        padding: 32,
        borderRadius: 32,
        backdropFilter: 'blur(30px)',
        border: darkMode ? '1px solid rgba(255,255,255,0.1)' : '1px solid rgba(255,255,255,0.3)',
        background: darkMode ? 'rgba(255,255,255,0.05)' : 'rgba(255,255,255,0.25)',
        boxShadow: '0 8px 32px rgba(0,0,0,0.3)',
        animation: 'fade-in 0.8s ease-out',
        color: darkMode ? '#fff' : '#000',
      }}
    >
      <h2 style={{ fontWeight: 'bold', fontSize: 24, marginBottom: 24 }}>Personal Information Form</h2>

      <h3 style={{ fontWeight: 600, marginBottom: 16 }}>Required Information</h3>
      {requiredQuestions.map(renderField)}

      <h3 style={{ fontWeight: 600, marginTop: 32, marginBottom: 16 }}>Optional Information</h3>
      {optionalQuestions.map(renderField)}

      <div style={{ textAlign: 'center', marginTop: 32 }}>
        <GlassButton type="submit" disabled={loading} darkMode={darkMode}>
          {loading ? (
            <span style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8 }}>
              <Loader className="animate-spin" size={20} />
              Generating...
            </span>
          ) : (
            'Submit & Generate'
          )}
        </GlassButton>
      </div>
    </form>
  );
};

export default FormComponent;
