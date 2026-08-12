import React from 'react';
// import { Card, CardContent } from '@/components/ui/card';
// import { Button } from '@/components/ui/button';
import { BarChart3, Briefcase, FileText, Mic, TrendingUp, User } from 'lucide-react';
import { ResponsiveContainer, BarChart, Bar, XAxis, YAxis, Tooltip } from 'recharts';

const data = [{ name: 'Mon', score: 60 }, { name: 'Tue', score: 72 }, { name: 'Wed', score: 68 }, { name: 'Thu', score: 80 }, { name: 'Fri', score: 88 }];

function LandingPage() {
    return (
        <div className='min-h-screen text-white'>
            <header className='bg-white sticky top-0 z-10'>
                <div className='max-w-7xl mx-auto px-6 py-4 flex justify-between items-center'>
                    <h1 className='text-2xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent'>CareerBoost AI</h1>
                    <nav className='hidden md:flex md:items-center gap-6 text-sm text-slate-600'>
                        <a href='#features'>Features</a>
                        <a href='#dashboard'>Dashboard</a>
                        <a href='#pricing'>Pricing</a>
                        <a href='#pricing'>Login</a>
                        <button className='rounded-xl border border-purple-300 bg-indigo-300/20 px-4 py-2 from-cyan-400 to-blue-500 text-transparent'>
                            <span class="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                                Login
                            </span>
                        </button>
                    </nav>
                    {/* <button className='rounded-2xl bg-indigo-300/20 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent'>Get Started</button> */}
                </div>
            </header>

            <div className='bg-indigo-300/20'>
                <section className='max-w-7xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-10 items-center'>
                    <div>
                        <h2 className='text-4xl lg:text-5xl lg:leading-14 font-semibold text-black leading-tight'>Boost Your Career With AI</h2>
                        <p className='mt-5 text-slate-400 text-lg'>Resume scoring, mock interviews, job tracking, and personalized career guidance in one smart platform.</p>
                        <div className='mt-8 flex gap-4'>
                            <button className='rounded-2xl'>Start Free</button>
                            <button className='rounded-2xl text-black'>Live Demo</button>
                            {/* <Button className='rounded-2xl'>Start Free</Button>
                            <Button variant='outline' className='rounded-2xl text-black'>Live Demo</Button> */}
                        </div>
                    </div>
                    {/* <Card className='bg-slate-900 border-slate-800 rounded-3xl shadow-2xl'>
                        <CardContent className='p-6 space-y-4'>
                            <div className='grid grid-cols-2 gap-4'>
                                <div className='p-4 rounded-2xl bg-slate-800'><p className='text-sm text-slate-400'>Resume Score</p><p className='text-3xl font-bold'>82%</p></div>
                                <div className='p-4 rounded-2xl bg-slate-800'><p className='text-sm text-slate-400'>Interview Score</p><p className='text-3xl font-bold'>76%</p></div>
                            </div>
                            <div className='h-56'><ResponsiveContainer width='100%' height='100%'><BarChart data={data}><XAxis dataKey='name' stroke='#94a3b8' /><YAxis stroke='#94a3b8' /><Tooltip /><Bar dataKey='score' radius={[8, 8, 0, 0]} /></BarChart></ResponsiveContainer></div>
                        </CardContent>
                    </Card> */}
                </section>
            </div>

            <section id='features' className='max-w-7xl mx-auto px-6 py-10 grid md:grid-cols-4 gap-6'>
                {[
                    ['Resume Analyzer', FileText], ['Mock Interviews', Mic], ['Job Tracker', Briefcase], ['Career Analytics', TrendingUp]
                ].map(([title, Icon], i) => 
                // <Card key={i} className='bg-slate-900 border-slate-800 rounded-3xl'>
                //     <CardContent className='p-6'>
                //         <Icon className='mb-4' />
                //         <h3 className='font-semibold text-lg'>{title}</h3>
                //         <p className='text-slate-400 text-sm mt-2'>AI-powered tools to accelerate your growth.</p>
                //     </CardContent>
                // </Card>
                <></>
                )}
            </section>

            <section id='dashboard' className='max-w-7xl mx-auto px-6 py-20'>
                <div className='flex items-center gap-3 mb-8'>
                    <BarChart3 />
                    <h3 className='text-3xl font-bold'>User Dashboard</h3>
                </div>
                <div className='grid lg:grid-cols-4 gap-6'>
                    {[
                        ['Resume Score', '82%'], ['Applications', '24'], ['Interviews', '8'], ['Skill Growth', '+34%']
                    ].map((item, i) => 
                    // <Card key={i} className='bg-slate-900 border-slate-800 rounded-3xl'>
                    //     <CardContent className='p-6'>
                    //         <p className='text-slate-400 text-sm'>{item[0]}</p>
                    //         <p className='text-3xl font-bold mt-2'>{item[1]}</p>
                    //     </CardContent>
                    // </Card>
                    <></>
                    )}
                </div>
                <div className='grid lg:grid-cols-3 gap-6 mt-6'>
                    {/* <Card className='lg:col-span-2 bg-slate-900 border-slate-800 rounded-3xl'><CardContent className='p-6'><h4 className='font-semibold mb-4'>Weekly Progress</h4><div className='h-72'><ResponsiveContainer width='100%' height='100%'><BarChart data={data}><XAxis dataKey='name' stroke='#94a3b8' /><YAxis stroke='#94a3b8' /><Tooltip /><Bar dataKey='score' radius={[8, 8, 0, 0]} /></BarChart></ResponsiveContainer></div></CardContent></Card>
                    <Card className='bg-slate-900 border-slate-800 rounded-3xl'><CardContent className='p-6'><div className='flex items-center gap-2 mb-4'><User size={18} /><h4 className='font-semibold'>Profile</h4></div><p className='text-slate-300'>Arun Kumar</p><p className='text-slate-400 text-sm'>Intermediate MERN Developer</p><p className='text-slate-400 text-sm mt-4'>Target Role: Full Stack Engineer</p><Button className='w-full mt-6 rounded-2xl'>Edit Profile</Button></CardContent></Card> */}
                </div>
            </section>

            <section id='pricing' className='max-w-7xl mx-auto px-6 py-20'>
                {/* <Card className='bg-gradient-to-r from-cyan-500 to-blue-600 border-0 rounded-3xl'><CardContent className='p-10 text-center'><h3 className='text-3xl font-bold'>Start Building Your Career Today</h3><p className='mt-3 text-white/90'>Free plan available. Upgrade anytime for advanced AI features.</p><Button className='mt-6 bg-white text-black rounded-2xl'>Get Started Free</Button></CardContent></Card> */}
            </section>
        </div>
    )
}

export default LandingPage