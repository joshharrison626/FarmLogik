import React, { useState } from 'react';
import { Plus, Edit, Car } from 'lucide-react';
import useManageLivestock from '../hooks/useManageLivestock';
import SidePanel from '../designSystem/SidePanel/SidePanel';
import { Button, Error, LoadingSpinner, TextField } from '../designSystem';
import Card from '../designSystem/Card/Card';
import AddEditLivestock from '../components/addEditLivestock/AddEditLivestock';
import { Animal } from '../types';

const Livestock = () => {
  const [selectedAnimal, setSelectedAnimal] = useState<Animal | null>(null);
  const [showPanel, setShowPanel] = useState(false);
  const { data: livestock, loading, error, getLivestock, updateLivestock } = useManageLivestock();

  const showAddEditPanel = (animal?: Animal) => {
    setSelectedAnimal(animal || null);
    setShowPanel(true);
  }

  const handleCloseSidePanel = () => {
    setShowPanel(false);
  };

  const handleSaveAnimal = (animal: Animal) => {
    updateLivestock(animal.id, animal);
    getLivestock();
    setShowPanel(false);
  };

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Livestock</h1>
        <Button onClick={showAddEditPanel}>
          <Plus size={20} className="mr-2" />
          Add Animal
        </Button>
      </div>

      {loading && <LoadingSpinner />}
      {error && <Error message={error.message} />}
      {!loading && !error && livestock.length > 0 && (
        <Card.List>
          {livestock.map((animal) => (
            <Card key={animal.id}>
              <Card.HeaderImage
                imageName={animal.imageName}
                alt={animal.name}
              />
              <Card.Body>
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="text-lg font-semibold">{animal.name}</h3>
                    <p className="text-gray-600">{animal.breed}</p>
                  </div>
                  <button className="p-2 text-gray-600 hover:bg-gray-100 rounded-lg">
                    <Edit size={18} />
                  </button>
                </div>
                <div className="mt-4">
                  <span className={`px-3 py-1 rounded-full text-sm ${
                    animal.status === 'healthy' ? 'bg-green-100 text-green-800' :
                    animal.status === 'sick' ? 'bg-red-100 text-red-800' :
                    'bg-yellow-100 text-yellow-800'
                  }`}>
                    {animal.status}
                  </span>
                </div>
                <div className="mt-4 flex flex-wrap gap-2">
                  {animal.tags.map((tag, index) => (
                    <span key={index} className="bg-gray-100 text-gray-600 px-2 py-1 rounded-md text-sm">
                      {tag}
                    </span>
                  ))}
                </div>
              </Card.Body>
              <Card.Footer>
                <div key={animal.id} className="bg-white rounded-lg shadow-md overflow-hidden">
                </div>
              </Card.Footer>
            </Card>
          ))}
        </Card.List>
      )}
      <AddEditLivestock animal={selectedAnimal} show={showPanel} onClose={handleCloseSidePanel} onSave={handleSaveAnimal}/>
    </div>
  );
};

export default Livestock;