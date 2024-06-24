import { useState, useEffect } from "react";
import { Appbar } from "../components/Appbar";
import { Balance } from "../components/Balance";
import { Users } from "../components/Users";
import axios from "axios";

export const Dashboard = () => {
    const [balance, setBalance] = useState(null);

    useEffect(() => {
        const fetchBalance = async () => {
            try {
                const response = await axios.get("http://localhost:3001/api/v1/account/balance");
                setBalance(response.data.balance);
            } catch (error) {
                console.error("Error fetching balance:", error);
            }
        };

        fetchBalance();
    }, []); // Empty dependency array ensures the effect runs only once on component mount

    return (
        <div>
            <Appbar />
            <div className="m-8">
                {balance !== null && <Balance value={balance} />}
                <Users />
            </div>
        </div>
    );
};
