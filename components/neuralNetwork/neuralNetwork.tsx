const NeuralNetwork = () => (
  <div className="w-full mx-auto flex justify-center">
  <svg xmlns="http://www.w3.org/2000/svg" width="650" height="400" version="1.1">
    <line x1="100" y1="100.0" x2="250" y2="80.0" stroke="#e5e7eb" strokeWidth="1" id="line0_0_0">
      <animate attributeName="stroke" values="#e5e7eb;#0038ff;#e5e7eb" dur="2s" repeatCount="indefinite" begin="1s" />
    </line>
    <line x1="100" y1="100.0" x2="250" y2="160.0" stroke="#e5e7eb" strokeWidth="1" id="line0_0_1">
      <animate attributeName="stroke" values="#e5e7eb;#0038ff;#e5e7eb" dur="3.5s" repeatCount="indefinite" begin="2s" />
    </line>
    <line x1="100" y1="100.0" x2="250" y2="240.0" stroke="#e5e7eb" strokeWidth="1" id="line0_0_2">
      <animate attributeName="stroke" values="#e5e7eb;#0038ff;#e5e7eb" dur="2s" repeatCount="indefinite" begin="2s" />
    </line>
    <line x1="100" y1="100.0" x2="250" y2="320.0" stroke="#e5e7eb" strokeWidth="1" id="line0_0_3">
      <animate attributeName="stroke" values="#e5e7eb;#0038ff;#e5e7eb" dur="1.5s" repeatCount="indefinite" begin="1.5s" />
    </line>
    <line x1="100" y1="200.0" x2="250" y2="80.0" stroke="#e5e7eb" strokeWidth="1" id="line0_1_0">
      <animate attributeName="stroke" values="#e5e7eb;#0038ff;#e5e7eb" dur="2.5s" repeatCount="indefinite" begin="1s" />
    </line>
    <line x1="100" y1="200.0" x2="250" y2="160.0" stroke="#e5e7eb" strokeWidth="1" id="line0_1_1">
      <animate attributeName="stroke" values="#e5e7eb;#0038ff;#e5e7eb" dur="3.5s" repeatCount="indefinite" begin="1.5s" />
    </line>
    <line x1="100" y1="200.0" x2="250" y2="240.0" stroke="#e5e7eb" strokeWidth="1" id="line0_1_2">
      <animate attributeName="stroke" values="#e5e7eb;#0038ff;#e5e7eb" dur="2s" repeatCount="indefinite" begin="2s" />
    </line>
    <line x1="100" y1="200.0" x2="250" y2="320.0" stroke="#e5e7eb" strokeWidth="1" id="line0_1_3">
      <animate attributeName="stroke" values="#e5e7eb;#0038ff;#e5e7eb" dur="1.5s" repeatCount="indefinite" begin="3s" />
    </line>
    <line x1="100" y1="300.0" x2="250" y2="80.0" stroke="#e5e7eb" strokeWidth="1" id="line0_2_0">
      <animate attributeName="stroke" values="#e5e7eb;#0038ff;#e5e7eb" dur="2s" repeatCount="indefinite" begin="1.5s" />
    </line>
    <line x1="100" y1="300.0" x2="250" y2="160.0" stroke="#e5e7eb" strokeWidth="1" id="line0_2_1">
      <animate attributeName="stroke" values="#e5e7eb;#0038ff;#e5e7eb" dur="3s" repeatCount="indefinite" begin="1s" />
    </line>
    <line x1="100" y1="300.0" x2="250" y2="240.0" stroke="#e5e7eb" strokeWidth="1" id="line0_2_2">
      <animate attributeName="stroke" values="#e5e7eb;#0038ff;#e5e7eb" dur="2.5s" repeatCount="indefinite" begin="1s" />
    </line>
    <line x1="100" y1="300.0" x2="250" y2="320.0" stroke="#e5e7eb" strokeWidth="1" id="line0_2_3">
      <animate attributeName="stroke" values="#e5e7eb;#0038ff;#e5e7eb" dur="1.5s" repeatCount="indefinite" begin="1.5s" />
    </line>
    <line x1="250" y1="80.0" x2="400" y2="100.0" stroke="#e5e7eb" strokeWidth="1" id="line1_0_0">
      <animate attributeName="stroke" values="#e5e7eb;#0038ff;#e5e7eb" dur="2s" repeatCount="indefinite" begin="2s" />
    </line>
    <line x1="250" y1="80.0" x2="400" y2="200.0" stroke="#e5e7eb" strokeWidth="1" id="line1_0_1">
      <animate attributeName="stroke" values="#e5e7eb;#0038ff;#e5e7eb" dur="3.5s" repeatCount="indefinite" begin="3s" />
    </line>
    <line x1="250" y1="80.0" x2="400" y2="300.0" stroke="#e5e7eb" strokeWidth="1" id="line1_0_2">
      <animate attributeName="stroke" values="#e5e7eb;#0038ff;#e5e7eb" dur="2.5s" repeatCount="indefinite" begin="2s" />
    </line>
    <line x1="250" y1="160.0" x2="400" y2="100.0" stroke="#e5e7eb" strokeWidth="1" id="line1_1_0">
      <animate attributeName="stroke" values="#e5e7eb;#0038ff;#e5e7eb" dur="1.5s" repeatCount="indefinite" begin="1.5s" />
    </line>
    <line x1="250" y1="160.0" x2="400" y2="200.0" stroke="#e5e7eb" strokeWidth="1" id="line1_1_1">
      <animate attributeName="stroke" values="#e5e7eb;#0038ff;#e5e7eb" dur="2s" repeatCount="indefinite" begin="2s" />
    </line>
    <line x1="250" y1="160.0" x2="400" y2="300.0" stroke="#e5e7eb" strokeWidth="1" id="line1_1_2">
      <animate attributeName="stroke" values="#e5e7eb;#0038ff;#e5e7eb" dur="3.5s" repeatCount="indefinite" begin="1s" />
    </line>
    <line x1="250" y1="240.0" x2="400" y2="100.0" stroke="#e5e7eb" strokeWidth="1" id="line1_2_0">
      <animate attributeName="stroke" values="#e5e7eb;#0038ff;#e5e7eb" dur="2s" repeatCount="indefinite" begin="3s" />
    </line>
    <line x1="250" y1="240.0" x2="400" y2="200.0" stroke="#e5e7eb" strokeWidth="1" id="line1_2_1">
      <animate attributeName="stroke" values="#e5e7eb;#0038ff;#e5e7eb" dur="1.5s" repeatCount="indefinite" begin="2.5s" />
    </line>
    <line x1="250" y1="240.0" x2="400" y2="300.0" stroke="#e5e7eb" strokeWidth="1" id="line1_2_2">
      <animate attributeName="stroke" values="#e5e7eb;#0038ff;#e5e7eb" dur="2.5s" repeatCount="indefinite" begin="1.5s" />
    </line>
    <line x1="250" y1="320.0" x2="400" y2="100.0" stroke="#e5e7eb" strokeWidth="1" id="line1_3_0">
      <animate attributeName="stroke" values="#e5e7eb;#0038ff;#e5e7eb" dur="3s" repeatCount="indefinite" begin="1s" />
    </line>
    <line x1="250" y1="320.0" x2="400" y2="200.0" stroke="#e5e7eb" strokeWidth="1" id="line1_3_1">
      <animate attributeName="stroke" values="#e5e7eb;#0038ff;#e5e7eb" dur="2.5s" repeatCount="indefinite" begin="1s" />
    </line>
    <line x1="250" y1="320.0" x2="400" y2="300.0" stroke="#e5e7eb" strokeWidth="1" id="line1_3_2">
      <animate attributeName="stroke" values="#e5e7eb;#0038ff;#e5e7eb" dur="1.5s" repeatCount="indefinite" begin="2s" />
    </line>
    <line x1="400" y1="100.0" x2="550" y2="200.0" stroke="#e5e7eb" strokeWidth="1" id="line2_0_0">
      <animate attributeName="stroke" values="#e5e7eb;#0038ff;#e5e7eb" dur="2s" repeatCount="indefinite" begin="2s" />
    </line>
    <line x1="400" y1="200.0" x2="550" y2="200.0" stroke="#e5e7eb" strokeWidth="1" id="line2_1_0">
      <animate attributeName="stroke" values="#e5e7eb;#0038ff;#e5e7eb" dur="3s" repeatCount="indefinite" begin="1.5s" />
    </line>
    <line x1="400" y1="300.0" x2="550" y2="200.0" stroke="#e5e7eb" strokeWidth="1" id="line2_2_0">
      <animate attributeName="stroke" values="#e5e7eb;#0038ff;#e5e7eb" dur="2s" repeatCount="indefinite" begin="1.5s" />
    </line>
    <circle cx="100" cy="100.0" r="20" fill="white" stroke="#e5e7eb" strokeWidth="1" fillOpacity="1">
      <animate attributeName="stroke" values="#e5e7eb;#00b0ff;#e5e7eb" dur="1.5s" repeatCount="indefinite" begin="3s" />
    </circle>
    <circle cx="100" cy="200.0" r="20" fill="white" stroke="#e5e7eb" strokeWidth="1" fillOpacity="1">
      <animate attributeName="stroke" values="#e5e7eb;#00b0ff;#e5e7eb" dur="2.5s" repeatCount="indefinite" begin="3s" />
    </circle>
    <circle cx="100" cy="300.0" r="20" fill="white" stroke="#e5e7eb" strokeWidth="1" fillOpacity="1">
      <animate attributeName="stroke" values="#e5e7eb;#00b0ff;#e5e7eb" dur="3.5s" repeatCount="indefinite" begin="1.5s" />
    </circle>
    <circle cx="250" cy="80.0" r="20" fill="white" stroke="#e5e7eb" strokeWidth="1" fillOpacity="1">
      <animate attributeName="stroke" values="#e5e7eb;#00b0ff;#e5e7eb" dur="2s" repeatCount="indefinite" begin="1s" />
    </circle>
    <circle cx="250" cy="160.0" r="20" fill="white" stroke="#e5e7eb" strokeWidth="1" fillOpacity="1">
      <animate attributeName="stroke" values="#e5e7eb;#00b0ff;#e5e7eb" dur="1.5s" repeatCount="indefinite" begin="1s" />
    </circle>
    <circle cx="250" cy="240.0" r="20" fill="white" stroke="#e5e7eb" strokeWidth="1" fillOpacity="1">
      <animate attributeName="stroke" values="#e5e7eb;#00b0ff;#e5e7eb" dur="2s" repeatCount="indefinite" begin="1s" />
    </circle>
    <circle cx="250" cy="320.0" r="20" fill="white" stroke="#e5e7eb" strokeWidth="1" fillOpacity="1">
      <animate attributeName="stroke" values="#e5e7eb;#00b0ff;#e5e7eb" dur="3s" repeatCount="indefinite" begin="3s" />
    </circle>
    <circle cx="400" cy="100.0" r="20" fill="white" stroke="#e5e7eb" strokeWidth="1" fillOpacity="1">
      <animate attributeName="stroke" values="#e5e7eb;#00b0ff;#e5e7eb" dur="2s" repeatCount="indefinite" begin="2s" />
    </circle>
    <circle cx="400" cy="200.0" r="20" fill="white" stroke="#e5e7eb" strokeWidth="1" fillOpacity="1">
      <animate attributeName="stroke" values="#e5e7eb;#00b0ff;#e5e7eb" dur="1.5s" repeatCount="indefinite" begin="3s" />
    </circle>
    <circle cx="400" cy="300.0" r="20" fill="white" stroke="#e5e7eb" strokeWidth="1" fillOpacity="1">
      <animate attributeName="stroke" values="#e5e7eb;#00b0ff;#e5e7eb" dur="2.5s" repeatCount="indefinite" begin="1s" />
    </circle>
    <circle cx="550" cy="200.0" r="20" fill="white" stroke="#e5e7eb" strokeWidth="1" fillOpacity="1">
      <animate attributeName="stroke" values="#e5e7eb;#00b0ff;#e5e7eb" dur="3.5s" repeatCount="indefinite" begin="1s" />
    </circle>
  </svg>
  </div>
)

export default NeuralNetwork;
