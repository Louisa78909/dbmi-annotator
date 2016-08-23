var config = {};
config.store = {};
config.annotator = {};
config.elastico = {};
config.profile = {};

// postgres db
<<<<<<< HEAD
<<<<<<< HEAD
config.postgres = process.env.DATABASE_URL || 'postgres://postgres:<password>@localhost:5432/dbmiannotator'; 
=======
config.postgres = process.env.DATABASE_URL || 'postgres://<username>:<password>@<hostname/ip addresss>:<port>/<schema name>'; 
>>>>>>> parent of daeae4b... update sql
=======
config.postgres = process.env.DATABASE_URL || 'postgres://<username>:<password>@<hostname/ip addresss>:<port>/<schema name>'; 
>>>>>>> parent of daeae4b... update sql

// dbmi annotator 
config.annotator.host = 'host name or ip address';
config.annotator.port = 'port';


// annotator store
config.store.host = 'host name or ip address';
config.store.port = 'port';

// elastico
config.elastico.host = 'host name or ip address';
config.elastico.port = 'port';

// user default profile
config.profile.def = 'MP';
config.profile.pluginSetL = [];
config.profile.userProfile = {};

module.exports = config;
