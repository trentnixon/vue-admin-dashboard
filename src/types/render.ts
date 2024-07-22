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
