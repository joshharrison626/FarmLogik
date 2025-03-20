import React, { useRef } from "react";
import { Button, ImageUpload, SidePanel, TextField } from "../../designSystem";
import { Animal } from "../../types";

type AddEditLivestockProps = {
    animal?: Animal | null;
    show: boolean;
    onClose: () => void;
    onSave: (animal: any) => void;
};

const AddEditLivestock = ({ animal, show, onClose, onSave }: AddEditLivestockProps) => {
    const nameRef = useRef<HTMLInputElement>(null);
    const typeRef = useRef<HTMLInputElement>(null);
    const breedRef = useRef<HTMLInputElement>(null);
    const birthDateRef = useRef<HTMLInputElement>(null);
    const imageUploadRef = useRef<HTMLInputElement>(null);
    const statusRef = useRef<HTMLInputElement>(null);
    const tagsRef = useRef<HTMLInputElement>(null);

    const handleSave = () => {
        const imageFileName = imageUploadRef.current?.files?.[0]?.name || animal?.imageName || '';
        const updatedTags = tagsRef.current?.value.split(',').map(tag => tag.trim()) || [];
        const updatedAnimal: Animal = {
            id: animal?.id || "",
            name: nameRef.current?.value || "",
            type: typeRef.current?.value || "",
            breed: breedRef.current?.value || "",
            birthDate: birthDateRef.current?.value || "",
            imageName: imageFileName,
            status: (["healthy", "sick", "treatment"].includes(statusRef.current?.value || "") 
                ? statusRef.current?.value 
                : "healthy") as "healthy" | "sick" | "treatment",
            tags: updatedTags,
        };
        onSave(updatedAnimal);
    };
    return (
        <SidePanel dismissible show={show} onClose={onClose}>
        <SidePanel.Header title={`${animal?.id ? "Edit" : "Add"} Livestock`} />
        <SidePanel.Body>
            <div className="flex flex-col gap-6">
                <img src={`src/images/${animal?.imageName}`} alt="" />
                <TextField inputRef={nameRef} label="Name" value={animal?.name || ""} />
                <TextField inputRef={typeRef} label="Type" value={animal?.type || ""} />
                <TextField inputRef={breedRef} label="Breed" value={animal?.breed || ""} />
                <TextField inputRef={birthDateRef} label="Birth Date" value={animal?.birthDate || ""} />
                <ImageUpload inputRef={imageUploadRef} label="Image" />
                <TextField inputRef={statusRef} label="Status" value={animal?.status || "healthy"} />
                <TextField inputRef={tagsRef} label="Tags" value={animal?.tags?.join(', ') || ""} />
            </div>
        </SidePanel.Body>
        <SidePanel.Footer>
          <Button label="Cancel" priority="secondary" onClick={onClose}/>
          <Button label="Save" priority="primary" onClick={handleSave}/>
        </SidePanel.Footer>
      </SidePanel>
    );
};

export default AddEditLivestock;