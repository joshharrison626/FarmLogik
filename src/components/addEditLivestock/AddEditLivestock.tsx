import { Button, SidePanel, TextField } from "../../designSystem";
import { Animal } from "../../types";

type AddEditLivestockProps = {
    animal?: Animal | null;
    show: boolean;
    onClose: () => void;
    onSave: () => void;
};

const AddEditLivestock = ({ animal, show, onClose, onSave }: AddEditLivestockProps) => {
    return (
        <SidePanel dismissible show={show} onClose={onClose}>
        <SidePanel.Header title={`${animal?.id ? "Edit" : "Add"} Livestock`} />
        <SidePanel.Body>
            <div className="flex flex-col gap-6">
                <TextField label="Name" value={animal?.name || ""} />
                <TextField label="Type" value={animal?.type || ""} />
                <TextField label="Breed" value={animal?.breed || ""} />
                <TextField label="Birth Date" value={animal?.birthDate || ""} />
                <TextField label="Image Name" value={animal?.imageName || ""} />
                <input type="file" />
                <TextField label="Status" value={animal?.status || ""} />
                <TextField label="Tags" value={animal?.tags?.join(', ') || ""} />
            </div>
        </SidePanel.Body>
        <SidePanel.Footer>
          <Button label="Cancel" priority="secondary" onClick={onClose}/>
          <Button label="Save" priority="primary" onClick={onSave}/>
        </SidePanel.Footer>
      </SidePanel>
    );
};

export default AddEditLivestock;