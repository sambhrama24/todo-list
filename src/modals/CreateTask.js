import React, {useState} from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

const CreateTaskPopup = ({modal, toggle, save}) => {
    const [taskName, setTaskName] = useState('');
    const [taskDescription, setTaskDescription] = useState('');
    const handleChange = (e) => {
        const name = e.target.name;
        const value = e.target.value; //const { name, value } = e.target;

        if (name === 'taskName') {
            setTaskName(value);
        }
        else {
            setTaskDescription(value);
        }
    }

    const handleSave = () => {
        let taskObj = {}
        taskObj["Name"] = taskName;
        taskObj["Description"] = taskDescription;
        save(taskObj);
    }

    return (
        <Modal isOpen={modal} toggle={toggle}>
            <ModalHeader toggle={toggle}>Create Task</ModalHeader>
            <ModalBody>
                <form>
                    <div className="form-group">
                        <label>Task Name</label>
                        <input type="text" className="form-control" value={taskName} onChange={handleChange} name="taskName"/>
                    </div>
                    <div className="form-group">
                        <label>Task Description</label>
                        <textarea className="form-control" rows="5" value={taskDescription} onChange={handleChange} name = "taskDescription"></textarea>
                    </div>
                </form>
            </ModalBody>
            <ModalFooter>
                <Button color="primary" onClick={handleSave}>Create</Button>{' '}
                <Button color="secondary" onClick={toggle}>Cancel</Button>
            </ModalFooter>
            </Modal>
    );
};

export default CreateTaskPopup;