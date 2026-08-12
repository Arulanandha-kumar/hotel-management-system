import MainLayout from "../../layouts/MainLayout";
import Card from "../../components/Card";

const Dashboard = () => {
    return (
        <MainLayout pageTitle="Dashboard">

            <div className="grid md:grid-cols-4 gap-5">
                <Card
                title="Total Hotels"
                value="15"
                />

                <Card
                title="Total Rooms"
                value="500"
                />

                <Card
                title="Bookings"
                value="145"
                />

                <Card
                title="Revenue"
                value="₹2,50,000"
                />
            </div>
            <div className="mt-8 bg-white rounded-xl shadow p-6">
                <h2 className="text-xl font-bold mb-4">
                Recent Bookings
                </h2>

                <table className="w-full">
                    <thead>
                        <tr className="border-b">
                        <th className="text-left py-3">
                            Guest
                        </th>
                        <th className="text-left">
                            Room
                        </th>
                        <th className="text-left">
                            Status
                        </th>
                        </tr>
                    </thead>

                    <tbody>
                        <tr className="border-b">
                            <td className="py-3">
                                John Smith
                            </td>
                            <td>Deluxe Room</td>
                            <td>
                                <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full">
                                Confirmed
                                </span>
                            </td>
                        </tr>

                        <tr>
                            <td className="py-3">
                                David Lee
                            </td>
                            <td>Suite Room</td>
                            <td>
                                <span className="bg-yellow-100 text-yellow-700 px-3 py-1 rounded-full">
                                Pending
                                </span>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>

        </MainLayout>
    );
};

export default Dashboard;