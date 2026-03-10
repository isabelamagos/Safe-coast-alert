import React from 'react';
import { View, Text, Pressable } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { BottomTabBarProps } from '@react-navigation/bottom-tabs';

export default function CustomTabBar({ state, descriptors, navigation }: BottomTabBarProps) {
  const insets = useSafeAreaInsets();

  return (
    <View
      className="flex-row border-t border-border bg-card"
      style={{ paddingBottom: insets.bottom > 0 ? insets.bottom : 16, paddingTop: 12 }}>
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];
        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name);
          }
        };

        // El ícono se extrae desde las opciones del layout
        const Icon = options.tabBarIcon;

        return (
          <Pressable
            key={route.key}
            onPress={onPress}
            className="flex-1 items-center justify-center active:opacity-70">
            {Icon &&
              Icon({
                size: 24,
                className: isFocused ? 'text-primary' : 'text-muted-foreground',
              } as any)}
            <Text
              className={`mt-1 text-xs font-medium ${isFocused ? 'text-primary' : 'text-muted-foreground'}`}>
              {options.title}
            </Text>
          </Pressable>
        );
      })}
    </View>
  );
}
