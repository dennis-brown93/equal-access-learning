import { useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import AdminHeader from "@/components/admin/AdminHeader";
import QuickStats from "@/components/admin/QuickStats";
import DonationChart from "@/components/admin/DonationChart";
import RecentActivity from "@/components/admin/RecentActivity";
import { Button } from "@/components/ui/button";

// Mock data for admin dashboard
const mockDonations = [
  {
    id: "d1",
    name: "John Smith",
    email: "john.smith@example.com",
    amount: 100,
    date: "2023-05-15",
    status: "Completed"
  },
  {
    id: "d2",
    name: "Emily Johnson",
    email: "emily.j@example.com",
    amount: 250,
    date: "2023-05-14",
    status: "Completed"
  },
  {
    id: "d3",
    name: "Dennis Brown",
    email: "mbrown@example.com",
    amount: 50,
    date: "2023-05-12",
    status: "Completed"
  },
  {
    id: "d4",
    name: "Sarah Wilson",
    email: "swilson@example.com",
    amount: 500,
    date: "2023-05-10",
    status: "Completed"
  },
  {
    id: "d5",
    name: "David Chen",
    email: "dchen@example.com",
    amount: 75,
    date: "2023-05-08",
    status: "Completed"
  },
  {
    id: "d6",
    name: "Lisa Garcia",
    email: "lgarcia@example.com",
    amount: 150,
    date: "2023-05-07",
    status: "Completed"
  },
  {
    id: "d7",
    name: "Robert Taylor",
    email: "rtaylor@example.com",
    amount: 1000,
    date: "2023-05-05",
    status: "Completed"
  },
  {
    id: "d8",
    name: "Jennifer Martinez",
    email: "jmartinez@example.com",
    amount: 200,
    date: "2023-05-03",
    status: "Completed"
  },
];

const mockUsers = [
  {
    id: "u1",
    name: "John Smith",
    email: "john.smith@example.com",
    role: "Donor",
    joined: "2023-01-15"
  },
  {
    id: "u2",
    name: "Emily Johnson",
    email: "emily.j@example.com",
    role: "Volunteer",
    joined: "2023-02-20"
  },
  {
    id: "u3",
    name: "Michael Brown",
    email: "mbrown@example.com",
    role: "Donor",
    joined: "2022-11-05"
  },
  {
    id: "u4",
    name: "Sarah Wilson",
    email: "swilson@example.com",
    role: "Partner",
    joined: "2023-04-10"
  },
  {
    id: "u5",
    name: "David Chen",
    email: "dchen@example.com",
    role: "Donor",
    joined: "2022-09-17"
  },
  {
    id: "u6",
    name: "Lisa Garcia",
    email: "lgarcia@example.com",
    role: "Newsletter Subscriber",
    joined: "2023-03-22"
  },
  {
    id: "u7",
    name: "Robert Taylor",
    email: "rtaylor@example.com",
    role: "Major Donor",
    joined: "2022-08-30"
  },
  {
    id: "u8",
    name: "Jennifer Martinez",
    email: "jmartinez@example.com",
    role: "Volunteer",
    joined: "2023-01-05"
  },
];

// Calculate statistics
const totalDonations = mockDonations.reduce((sum, donation) => sum + donation.amount, 0);
const averageDonation = totalDonations / mockDonations.length;
const donorCount = new Set(mockDonations.map(donation => donation.email)).size;

const AdminPage = () => {
  const [searchTerm, setSearchTerm] = useState("");
  
  // Filter donations based on search term
  const filteredDonations = mockDonations.filter(donation => 
    donation.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    donation.email.toLowerCase().includes(searchTerm.toLowerCase())
  );
  
  // Filter users based on search term
  const filteredUsers = mockUsers.filter(user => 
    user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    user.email.toLowerCase().includes(searchTerm.toLowerCase())
  );
  
  return (
    <div className="min-h-screen bg-gray-50">
      <AdminHeader />
      
      <main className="container py-8">
        <QuickStats />
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
          <DonationChart />
          <RecentActivity />
        </div>
        
        <div className="mb-6 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <h2 className="text-xl font-serif font-bold">Manage Data</h2>
          <div className="w-full sm:w-auto">
            <Input
              placeholder="Search by name or email"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="max-w-xs"
            />
          </div>
        </div>
        
        <Tabs defaultValue="donations" className="w-full">
          <TabsList className="mb-6">
            <TabsTrigger value="donations">Donations</TabsTrigger>
            <TabsTrigger value="users">Users</TabsTrigger>
          </TabsList>
          
          <TabsContent value="donations">
            <Card>
              <CardHeader>
                <CardTitle>Donation History</CardTitle>
                <CardDescription>
                  View and manage all donations
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="rounded-md border">
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Name</TableHead>
                        <TableHead>Email</TableHead>
                        <TableHead>Amount</TableHead>
                        <TableHead>Date</TableHead>
                        <TableHead>Status</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {filteredDonations.length > 0 ? (
                        filteredDonations.map((donation) => (
                          <TableRow key={donation.id}>
                            <TableCell className="font-medium">{donation.name}</TableCell>
                            <TableCell>{donation.email}</TableCell>
                            <TableCell>${donation.amount}</TableCell>
                            <TableCell>{donation.date}</TableCell>
                            <TableCell>
                              <span className="inline-block px-2 py-1 text-xs font-medium rounded-full bg-green-100 text-green-800">
                                {donation.status}
                              </span>
                            </TableCell>
                          </TableRow>
                        ))
                      ) : (
                        <TableRow>
                          <TableCell colSpan={5} className="text-center py-6">
                            No donations found
                          </TableCell>
                        </TableRow>
                      )}
                    </TableBody>
                  </Table>
                </div>
                
                <div className="flex justify-between items-center mt-4">
                  <p className="text-sm text-gray-500">Showing {filteredDonations.length} of {mockDonations.length} donations</p>
                  <div className="flex space-x-2">
                    <Button variant="outline" size="sm" disabled>Previous</Button>
                    <Button variant="outline" size="sm" disabled>Next</Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="users">
            <Card>
              <CardHeader>
                <CardTitle>User Management</CardTitle>
                <CardDescription>
                  View and manage users
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="rounded-md border">
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Name</TableHead>
                        <TableHead>Email</TableHead>
                        <TableHead>Role</TableHead>
                        <TableHead>Joined</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {filteredUsers.length > 0 ? (
                        filteredUsers.map((user) => (
                          <TableRow key={user.id}>
                            <TableCell className="font-medium">{user.name}</TableCell>
                            <TableCell>{user.email}</TableCell>
                            <TableCell>{user.role}</TableCell>
                            <TableCell>{user.joined}</TableCell>
                          </TableRow>
                        ))
                      ) : (
                        <TableRow>
                          <TableCell colSpan={4} className="text-center py-6">
                            No users found
                          </TableCell>
                        </TableRow>
                      )}
                    </TableBody>
                  </Table>
                </div>
                
                <div className="flex justify-between items-center mt-4">
                  <p className="text-sm text-gray-500">Showing {filteredUsers.length} of {mockUsers.length} users</p>
                  <div className="flex space-x-2">
                    <Button variant="outline" size="sm" disabled>Previous</Button>
                    <Button variant="outline" size="sm" disabled>Next</Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </main>
    </div>
  );
};

export default AdminPage;
