import React from "react";
import { TouchableOpacity } from "react-native";
import { Feather } from "@expo/vector-icons";

interface EditButtonProps {
    onPress: () => void;
}

const EditButton: React.FC<EditButtonProps> = ({ onPress }) => {
    return (
        <TouchableOpacity onPress={onPress}>
            <Feather
                name="edit"
                size={16}
                color="rgba(235, 235, 245, 0.8)"
            />
        </TouchableOpacity>
    );
};

export default EditButton;