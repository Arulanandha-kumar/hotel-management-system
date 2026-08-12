import MainLayout from "../../layouts/MainLayout";

const ResumeAnalyzer = () => {
  return (
    <MainLayout pageTitle="Resume Analyzer">

      <div className="space-y-6">

        {/* Upload Section */}
        <div className="bg-slate-900 rounded-3xl p-8 border border-slate-800">

          <h2 className="text-xl font-semibold mb-2">
            Upload Your Resume
          </h2>

          <p className="text-slate-400 mb-6">
            Analyze ATS compatibility and receive AI feedback.
          </p>

          <div className="border-2 border-dashed border-slate-700 rounded-2xl p-10 text-center">

            <div className="text-6xl mb-4">📄</div>

            <h3 className="text-lg font-medium">
              Drag & Drop Resume
            </h3>

            <p className="text-slate-400 mt-2">
              PDF, DOCX up to 5MB
            </p>

            <button className="mt-5 bg-blue-600 px-6 py-3 rounded-xl">
              Upload Resume
            </button>
          </div>
        </div>
      </div>
      {/* Score Cards Section */}
      <div className="grid md:grid-cols-3 gap-6 mt-4">

        <div className="bg-slate-900 rounded-3xl p-6">
          <p className="text-slate-400">Resume Score</p>
          <h2 className="text-4xl font-bold mt-2">92%</h2>
        </div>

        <div className="bg-slate-900 rounded-3xl p-6">
          <p className="text-slate-400">ATS Score</p>
          <h2 className="text-4xl font-bold mt-2">88%</h2>
        </div>

        <div className="bg-slate-900 rounded-3xl p-6">
          <p className="text-slate-400">Keywords Found</p>
          <h2 className="text-4xl font-bold mt-2">24</h2>
        </div>

      </div>
      {/* Resume Preview + AI Analysis */}
      <div className="grid lg:grid-cols-2 gap-6 mt-4">

        {/* Resume Preview */}
        <div className="bg-slate-900 rounded-3xl p-6">

          <h3 className="text-xl font-semibold mb-4">
            Resume Preview
          </h3>

          <div className="h-[600px] bg-slate-800 rounded-2xl flex items-center justify-center">
            PDF Viewer
          </div>

        </div>

        {/* Analysis */}
        <div className="bg-slate-900 rounded-3xl p-6">

          <h3 className="text-xl font-semibold mb-4">
            AI Analysis
          </h3>

          <div className="space-y-5">

            <div>
              <h4 className="text-green-400 font-semibold">
                Strengths
              </h4>

              <ul className="mt-2 text-slate-300">
                <li>✔ Strong React experience</li>
                <li>✔ ATS-friendly formatting</li>
                <li>✔ Good project descriptions</li>
              </ul>
            </div>

            <div>
              <h4 className="text-red-400 font-semibold">
                Weaknesses
              </h4>

              <ul className="mt-2 text-slate-300">
                <li>✘ Missing leadership keywords</li>
                <li>✘ No measurable achievements</li>
              </ul>
            </div>

          </div>

        </div>

      </div>
      {/* Skills Match Section */}
      <div className="bg-slate-900 rounded-3xl p-6 mt-4">

        <h3 className="text-xl font-semibold mb-5">
          Skills Match
        </h3>

        <div className="flex flex-wrap gap-3">

          <span className="bg-green-500/20 text-green-400 px-4 py-2 rounded-full">
            React
          </span>

          <span className="bg-green-500/20 text-green-400 px-4 py-2 rounded-full">
            TypeScript
          </span>

          <span className="bg-green-500/20 text-green-400 px-4 py-2 rounded-full">
            Node.js
          </span>

        </div>

      </div>
      {/* Missing Keywords Section */}
      <div className="bg-slate-900 rounded-3xl p-6 mt-4">

        <h3 className="text-xl font-semibold mb-5">
          Missing Keywords
        </h3>

        <div className="flex flex-wrap gap-3">

          <span className="bg-red-500/20 text-red-400 px-4 py-2 rounded-full">
            Leadership
          </span>

          <span className="bg-red-500/20 text-red-400 px-4 py-2 rounded-full">
            Agile
          </span>

          <span className="bg-red-500/20 text-red-400 px-4 py-2 rounded-full">
            CI/CD
          </span>

        </div>

      </div>
      {/* ATS Breakdown */}
      <div className="bg-slate-900 rounded-3xl p-6 mt-4">

        <h3 className="text-xl font-semibold mb-6">
          ATS Breakdown
        </h3>

        <div className="space-y-5">

          <div>
            <div className="flex justify-between mb-2">
              <span>Formatting</span>
              <span>95%</span>
            </div>

            <div className="h-3 bg-slate-800 rounded-full">
              <div
                className="h-3 bg-blue-500 rounded-full"
                style={{ width: "95%" }}
              />
            </div>
          </div>

          <div>
            <div className="flex justify-between mb-2">
              <span>Keywords</span>
              <span>82%</span>
            </div>

            <div className="h-3 bg-slate-800 rounded-full">
              <div
                className="h-3 bg-green-500 rounded-full"
                style={{ width: "82%" }}
              />
            </div>
          </div>

        </div>

      </div>

    </MainLayout>
  );
};

export default ResumeAnalyzer;