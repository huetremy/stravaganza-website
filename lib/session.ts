import type { Session } from "next-auth";

export interface ExtendedSession extends Session {
    user_id: string;
};
