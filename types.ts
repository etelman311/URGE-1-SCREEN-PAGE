import React from 'react';

export interface Flavor {
  id: string;
  name: string;
  color: string;
  textColor: string;
  gradient: string;
  description: string;
}

export interface Feature {
  title: string;
  subtitle: string;
  icon?: React.ReactNode;
}