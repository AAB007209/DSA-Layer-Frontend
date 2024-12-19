import React, { useEffect, useState } from 'react';
import "../components/ProblemTable.css";
import axios from 'axios';

const ProblemTable = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Fetch data from the API
        const fetchData = async () => {
            try {
                const response = await axios.get('http://localhost:8000/user/get-all-problems');
                setData(response.data);
                setLoading(false);
            } catch (error) {
                console.error('Error fetching data:', error);
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    if (loading) {
        return <p>Loading...</p>;
    }

    return (
        <table border="1" style={{ borderCollapse: "collapse", width: "100%" }}>
            <thead>
                <tr>
                    <th>Title</th>
                    <th>Description</th>
                    <th>Difficulty</th>
                    <th>Category</th>
                    <th>Tags</th>
                    <th>Link</th>
                    <th>Hints</th>
                </tr>
            </thead>
            <tbody>
                {data.map((item, index) => (
                    <tr key={index}>
                        <td>{item.title}</td>
                        <td>{item.description}</td>
                        <td>{item.difficulty}</td>
                        <td>{item.category}</td>
                        {/* <td>{item.tags && item.tags.join(", ")}</td> */}
                        <td>
                            {item.tags && item.tags.map((tag, index) => (
                                <span key={index} className="tag-button">
                                    {tag}
                                </span>
                            ))}
                        </td>
                        <td>
                            <a href={item.link} target="_blank" rel="noopener noreferrer">
                                View Problem
                            </a>
                        </td>
                        <td>{item.solution}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
};

export default ProblemTable;
