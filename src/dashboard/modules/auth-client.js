import OAuthClient from 'disco-oauth';

const client = new OAuthClient(process.env.CLIENT_ID, process.env.CLIENT_SECRET);
// client.setRedirect(`${process.env.DASHBOARD_URL}/auth`);
// client.setScopes('identify', 'guilds');

export default client;
