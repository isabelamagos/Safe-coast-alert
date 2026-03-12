import { useState } from 'react';
import { Pressable, TextInputProps } from 'react-native';
import { Feather } from '@expo/vector-icons';
import BaseInput from './BaseInput';

interface PasswordInputProps extends TextInputProps {
  errorMessage?: string;
}

export default function PasswordInput({ errorMessage, ...props }: PasswordInputProps) {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword((prev) => !prev);
  };

  return (
    <BaseInput
      {...props}
      secureTextEntry={!showPassword}
      errorMessage={errorMessage}
      leftElement={<Feather name="lock" size={20} className="text-muted-foreground" />}
      rightElement={
        <Pressable
          onPress={togglePasswordVisibility}
          hitSlop={10}
          className="p-1 active:opacity-70">
          <Feather
            name={showPassword ? 'eye-off' : 'eye'}
            size={20}
            className="text-muted-foreground"
          />
        </Pressable>
      }
    />
  );
}
