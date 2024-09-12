import { Download } from './download';
import { Scheduler } from './scheduler';
export interface RenderAttributes {
  Name: string;
  Processing: boolean;
  Complete: boolean;
  sendEmail: boolean;
  hasTeamRosterRequest: boolean;
  hasTeamRosters: boolean;
  forceRerender: boolean;
  EmailSent: boolean;
  forceRerenderEmail: boolean;
  hasTeamRosterEmail: boolean;
  updatedAt: string;
  downloads: {
    data: Download[];
  };
  scheduler: {
    data: Scheduler;
  };
  game_results_in_renders: {
    data: Render[];
  };
  upcoming_games_in_renders: {
    data: Render[];
  };
  grades_in_renders: {
    data: Render[];
  };
}

export interface Render {
  id: number;
  attributes: RenderAttributes;
}

export interface RenderState {
  render: Render | null;
  renders: Render[];
  loading: boolean;
  error: string | null;
}
