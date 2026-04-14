"use client"

import {
  createContext,
  useContext,
  useState,
  ReactNode,
  Dispatch,
  SetStateAction,
} from 'react';
import { tracks } from '../data/tracks';
export interface Track {
  title: string;
  src: string;
  author: string;
  thumbnail?: string;
}
interface AudioPlayerContextType {
  currentTrack: Track | null;
  setCurrentTrack: Dispatch<SetStateAction<Track | null>>;
}
const AudioPlayerContext = createContext<
  AudioPlayerContextType | undefined
>(undefined);
export const AudioPlayerProvider = ({
  children,
}: {
  children: ReactNode;
}) =>{
  const [currentTrack, setCurrentTrack] = useState<Track | null>(null);
  const contextValue= {
    currentTrack,
    setCurrentTrack,
  };
  return (
    <AudioPlayerContext.Provider value={contextValue}>
      {children}
    </AudioPlayerContext.Provider>
  );
};
export const useAudioPlayerContext = (): AudioPlayerContextType => {
  const context = useContext(AudioPlayerContext);
  if (context === undefined) {
    throw new Error(
      'useAudioPlayerContext must be used within an AudioPlayerProvider'
    );
  }
  return context;
};