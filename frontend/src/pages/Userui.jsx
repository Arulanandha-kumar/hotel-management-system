import React from 'react'

function Userui() {
    const stats = [
        {
          title: 'Resume Score',
          value: '88%',
          change: '+12%',
          icon: '📄',
        },
        {
          title: 'Interview Score',
          value: '76%',
          change: '+8%',
          icon: '🎯',
        },
        {
          title: 'Jobs Applied',
          value: '42',
          change: '+15',
          icon: '💼',
        },
        {
          title: 'Skill Progress',
          value: '68%',
          change: '+10%',
          icon: '🚀',
        },
      ];
    const weeklyGrowth = [35, 45, 52, 60, 72, 80, 92];
    const days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];

    const statusData = [
        {
        label: 'Accepted',
        value: 35,
        color: 'bg-green-500',
        },
        {
        label: 'Pending',
        value: 45,
        color: 'bg-yellow-400',
        },
        {
        label: 'Rejected',
        value: 20,
        color: 'bg-red-500',
        },
    ];

  return (
    <div className="min-h-screen text-white p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8 gap-4">
          <div>
            <h1 className="text-2xl font-bold text-slate-800 capitalize">CareerBoost AI Dashboard</h1>
            <p className="text-slate-500 mt-1">
              Track your career growth and job application performance.
            </p>
          </div>

          <button className="bg-blue-600 hover:bg-blue-700 transition px-5 py-3 rounded-2xl font-medium shadow-lg">
            Update Resume
          </button>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6 mb-8">
          {stats.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-6 shadow-sm border border-slate-100 hover:shadow-md transition-shadow hover:scale-[1.02] transition"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="text-4xl">{item.icon}</div>
                <span className="text-sm font-medium flex items-center gap-1 text-emerald-600">
                  {item.change}
                </span>
              </div>

              <h3 className="text-slate-500 text-sm font-medium mb-1">{item.title}</h3>
              <p className="text-2xl font-bold text-slate-800">{item.value}</p>
            </div>
          ))}
        </div>

        {/* Charts Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Weekly Growth Graph */}
          <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 shadow-xl">
            <div className="flex items-center justify-between mb-6">
              <div>
                <h2 className="text-2xl font-bold">Weekly Growth</h2>
                <p className="text-slate-400 text-sm mt-1">
                  Performance improvement over the week
                </p>
              </div>

              <span className="bg-blue-500/20 text-blue-400 px-3 py-1 rounded-full text-sm">
                +18%
              </span>
            </div>

            <div className="flex items-end justify-between h-72 gap-4">
              {weeklyGrowth.map((value, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center w-full"
                >
                  <div className="w-full flex items-end h-60">
                    <div
                      className="w-full bg-gradient-to-t from-blue-600 to-cyan-400 rounded-t-2xl transition-all duration-500"
                      style={{ height: `${value}%` }}
                    />
                  </div>

                  <span className="text-slate-400 text-sm mt-3">
                    {days[index]}
                  </span>
                </div>
              ))}
            </div>
          </div>
          {/* Applications Status Chart */}
          <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 shadow-xl">
            <div className="mb-6">
              <h2 className="text-2xl font-bold">Application Status</h2>
              <p className="text-slate-400 text-sm mt-1">
                Current job application tracking
              </p>
            </div>

            <div className="space-y-6">
              {statusData.map((item, index) => (
                <div key={index}>
                  <div className="flex justify-between mb-2">
                    <span className="font-medium">{item.label}</span>
                    <span className="text-slate-300">{item.value}%</span>
                  </div>

                  <div className="w-full h-4 bg-slate-800 rounded-full overflow-hidden">
                    <div
                      className={`${item.color} h-full rounded-full transition-all duration-500`}
                      style={{ width: `${item.value}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>

            {/* Summary */}
            <div className="grid grid-cols-3 gap-4 mt-10">
              <div className="bg-slate-800 rounded-2xl p-4 text-center">
                <p className="text-2xl font-bold text-green-400">14</p>
                <p className="text-slate-400 text-sm mt-1">Accepted</p>
              </div>

              <div className="bg-slate-800 rounded-2xl p-4 text-center">
                <p className="text-2xl font-bold text-yellow-400">18</p>
                <p className="text-slate-400 text-sm mt-1">Pending</p>
              </div>

              <div className="bg-slate-800 rounded-2xl p-4 text-center">
                <p className="text-2xl font-bold text-red-400">8</p>
                <p className="text-slate-400 text-sm mt-1">Rejected</p>
              </div>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-8">
          <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 shadow-xl lg:col-span-2">
            <h2 className="text-2xl font-bold mb-4">AI Career Suggestions</h2>

            <div className="space-y-4">
              <div className="bg-slate-800 rounded-2xl p-4 flex items-start gap-4">
                <div className="text-2xl">🔥</div>
                <div>
                  <h3 className="font-semibold text-lg">
                    Improve React Performance Skills
                  </h3>
                  <p className="text-slate-400 text-sm mt-1">
                    Complete advanced React optimization challenges to boost your profile.
                  </p>
                </div>
              </div>

              <div className="bg-slate-800 rounded-2xl p-4 flex items-start gap-4">
                <div className="text-2xl">🤖</div>
                <div>
                  <h3 className="font-semibold text-lg">
                    Practice AI Mock Interviews
                  </h3>
                  <p className="text-slate-400 text-sm mt-1">
                    Your communication score can improve by practicing behavioral questions.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-blue-600 to-cyan-500 rounded-3xl p-6 shadow-xl flex flex-col justify-between">
            <div>
              <h2 className="text-2xl font-bold">Profile Strength</h2>
              <p className="text-white/80 mt-2 text-sm">
                Your overall career profile score based on resume, skills, and interview performance.
              </p>
            </div>

            <div className="mt-8 flex items-center justify-center">
              <div className="w-40 h-40 rounded-full border-8 border-white/30 flex items-center justify-center">
                <div className="text-center">
                  <p className="text-5xl font-bold">84%</p>
                  <p className="text-sm mt-1">Excellent</p>
                </div>
              </div>
            </div>
        </div>
    </div>
</div>
</div>
  )
}

export default Userui