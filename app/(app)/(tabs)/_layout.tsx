import React from 'react';
import { Tabs } from 'expo-router';
import { Feather } from '@expo/vector-icons';
import CustomHeader from '@/components/CustomHeader';
import CustomTabBar from '@/components/CustomTabBar';

export default function TabsLayout() {
  return (
    <Tabs
      tabBar={(props) => <CustomTabBar {...props} />}
      screenOptions={{
        header: ({ options, route }) => <CustomHeader title={options.title ?? route.name} />,
      }}>
      <Tabs.Screen
        name="index"
        options={{
          title: 'Inicio',
          tabBarIcon: ({ size, ...props }: any) => (
            <Feather name="home" size={size} className={props.className} />
          ),
        }}
      />
      <Tabs.Screen
        name="forum"
        options={{
          title: 'Forum',
          tabBarIcon: ({ size, ...props }: any) => (
            <Feather name="users" size={size} className={props.className} />
          ),
        }}
      />
      <Tabs.Screen
        name="nosotros"
        options={{
          title: 'Nosotros',
          tabBarIcon: ({ size, ...props }: any) => (
            <Feather name="info" size={size} className={props.className} />
          ),
        }}
      />
    </Tabs>
  );
}
