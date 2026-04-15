import { View, TextInput, TextInputProps, Text } from 'react-native';
import { useState, ReactNode } from 'react';

interface BaseInputProps extends TextInputProps {
  leftElement?: ReactNode;
  rightElement?: ReactNode;
  errorMessage?: string;
}

export default function BaseInput({
  leftElement,
  rightElement,
  errorMessage,
  className = '',
  onFocus,
  onBlur,
  multiline,
  ...props
}: BaseInputProps) {
  const [isFocused, setIsFocused] = useState(false);

  const borderColor = errorMessage
    ? 'border-red-500'
    : isFocused
      ? 'border-primary'
      : 'border-border';

  const multilineStyles = multiline ? 'items-start' : 'items-center';

  return (
    <View className={`mb-6 ${className}`}>
      <View
        className={`min-h-16 flex-row items-center rounded-lg border bg-card px-3 ${borderColor} ${multilineStyles}`}>
        {leftElement && <View className={multiline ? 'mr-2 mt-1' : 'mr-2'}>{leftElement}</View>}

        <TextInput
          className={`flex-1 text-lg text-foreground ${multiline ? 'min-h-28' : ''}`}
          placeholderTextColor="#9CA3AF"
          multiline={multiline}
          textAlignVertical={multiline ? 'top' : 'center'}
          onFocus={(e) => {
            setIsFocused(true);
            onFocus?.(e);
          }}
          onBlur={(e) => {
            setIsFocused(false);
            onBlur?.(e);
          }}
          {...props}
        />

        {rightElement && <View className={multiline ? 'ml-2 mt-1' : 'ml-2'}>{rightElement}</View>}
      </View>

      {errorMessage && <Text className="mt-1 text-sm text-red-500">{errorMessage}</Text>}
    </View>
  );
}
