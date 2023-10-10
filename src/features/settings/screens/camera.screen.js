import React, { useRef, useState, useEffect } from "react";
import { Camera, CameraType } from "expo-camera";
import styled from "styled-components/native";
import { View, TouchableOpacity } from "react-native";
import { Text } from "../../../components/typography/text.component";
import { Button } from "react-native-paper";

const ProfileCamera = styled(Camera)`
  width: 100%;
  height: 100%;
`;

const CameraContainer = styled.View`
  width: 100%;
  height: 100%;
`;

const CameraButton = styled(Button).attrs({
  mode: "contained",
  icon: "camera",
})`
  position: absolute;
  bottom: 0;
  width: 100%;
  justify-content: center;
  border-radius: 0;
  height: 48px;
`;

export const CameraScreen = () => {
  const [hasPermission, setHasPermission] = useState(null);
  const cameraRef = useRef();

  useEffect(() => {
    (async () => {
      const { granted } = await Camera.requestCameraPermissionsAsync();
      setHasPermission(granted);
    })();
  }, []);

  const snap = async () => {
    if (cameraRef && cameraRef.current) {
      const photo = await cameraRef.current.takePictureAsync();
      console.log(photo);
    }
  };

  if (hasPermission === null) {
    return <View />;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }

  return (
    <CameraContainer>
      <ProfileCamera
        ref={(camera) => (cameraRef.current = camera)}
        ratio={"16:9"}
        type={CameraType.front}
        onCameraReady={() => {
          console.log("Camera Ready");
        }}
      ></ProfileCamera>
      <CameraButton onPress={snap}>Snap!</CameraButton>
    </CameraContainer>
  );

  // return (
  //   <TouchableOpacity onPress={snap}>
  //     <ProfileCamera
  //       ref={(camera) => (cameraRef.current = camera)}
  //       type={CameraType.front}
  //     />
  //   </TouchableOpacity>
  // );
};
