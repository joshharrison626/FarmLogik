import React, { useEffect, useState } from "react";
import { Animal } from "../types";

const mockAnimals: Animal[] = [
    {
      id: '1',
      name: 'Ginger',
      type: 'Goat',
      breed: 'Nigerian Dwarf',
      birthDate: '2020-05-15',
      imageName: 'goat_one.png',
      status: 'healthy',
      tags: ['dairy', 'female']
    },
    {
      id: '2',
      name: 'Cilantro',
      type: 'Goat',
      breed: 'Nigerian Dwarf',
      birthDate: '2023-02-15',
      imageName: 'goat_two.png',
      status: 'healthy',
      tags: ['dairy', 'female']
    },
    {
      id: '3',
      name: 'Terragon',
      type: 'Goat',
      breed: 'Nigerian Dwarf',
      birthDate: '2023-02-15',
      imageName: 'goat_three.png',
      status: 'healthy',
      tags: ['dairy', 'male']
    },
    {
      id: '4',
      name: 'Vanilla Bean',
      type: 'Goat',
      breed: 'Nigerian Dwarf',
      birthDate: '2023-02-15',
      imageName: 'goat_four.png',
      status: 'healthy',
      tags: ['dairy', 'male']
    },
    // Add more mock animals as needed
];

type ManageLivestockResponse = {
    data: Animal[];
    loading: boolean;
    error: Error | null;
    getLivestock: () => void;
    addLivestock: (animal: Animal) => void;
    updateLivestock: (animal: Animal) => void;
    deleteLivestock: (id: string) => void;
};

export default function useManageLivestock(): ManageLivestockResponse {
    const [data, setData] = useState<Animal[]>(mockAnimals);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<Error | null>(null);
    
    useEffect(() => {
        try {
            getLivestock();
        } catch (error) {
            setError(error as Error);
        }
    }, []);

    const getLivestock = () => {
        setLoading(true);
        setError(null);
        setTimeout(() => {
            // setData((prev) => {
            //     if (prev.length !== mockAnimals.length) {
            //         return [...prev, ...mockAnimals];
            //     }
            //     return [...prev];
            // });
            setLoading(false);
        }, 1000);
    }

    const addLivestock = (animal: Animal) => {
        debugger;
        setData((prev) => [...prev, animal]);
    };

    const updateLivestock = (animal: Animal) => {
        setData((prev) => prev.map((a) => a.id === animal.id ? animal : a));
    };

    const deleteLivestock = (id: string) => {
        setData((prev) => prev.filter((a) => a.id !== id));
    };
    
    return {data, loading, error, getLivestock, addLivestock, updateLivestock, deleteLivestock};
};