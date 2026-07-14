export interface ProdService {
  title: string;
  desc: string;
  btnText: string;
}

export const PROD_DELIVERABLES: string[] = [
  'High-resolution final master in <strong>WAV</strong> and <strong>MP3</strong> formats.',
  'Complete multi-track <strong>Stems</strong> for the entire project.',
  'Raw, unedited Guitar <strong>DIs</strong> for reamping.',
  'Programmed Drums audio alongside the raw <strong>MIDI</strong> file.',
  'Detailed <strong>Guitar Tabs</strong> delivered as Guitar Pro files (.gp) and PDF.',
  'Complete <strong>Commercial Rights</strong> transfer.'
];

export const PROD_SERVICES: ProdService[] = [
  {
    title: 'Mix & Master',
    desc: 'Just looking for engineering services? I can help with that too! I can take your existing stems and turn them into a loud, punchy, and aggressive modern mix.',
    btnText: 'Request a Mix'
  },
  {
    title: 'Tracking & Post',
    desc: 'Need your guitars tracked? Or impactful, cinematic sound design and FX layered into your drops? I can take care of this as well. Although tabs are greatly appreciated for tracking, they are not required!',
    btnText: 'Request Session Work'
  }
];
