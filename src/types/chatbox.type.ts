export type MessageType = {
  _idUser: string;
  sender: string;
  content: string;
  senderType: string;
  recipientType: string;
  timestamp?: string | Date;
};
