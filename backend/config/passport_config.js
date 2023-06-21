const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20");
const pool = require("../db");

passport.use(
  new GoogleStrategy(
    {
      clientID: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      callbackURL: "/api/auth/google/redirect",
    },
    (accessToken, refreshToken, profile, done) => {
      console.log("paspport callback fired after getting info from google");
      //console.log(profile);

      const query = {
        text: "SELECT * FROM USERS WHERE google_id = $1",
        values: [profile.id],
      };

      pool.query(query).then((response) => {
        if (response.rows.length != 0) {
          console.log(response.rows);
          done(null, response.rows[0]);
        } else {
          const user = {
            google_id: profile.id,
            fname: profile.name.givenName,
            lname: profile.name.familyName,
            email: profile.emails[0].value,
          };

          const createUserQuery = {
            text: "INSERT INTO USERS(fname,lname,email,google_id) VALUES($1,$2,$3,$4)",
            values: [user.fname, user.lname, user.email, user.google_id],
          };

          pool.query(createUserQuery);

          done(null, user);
        }
      });
    }
  )
);

passport.serializeUser((user, done) => {
  //executes after passport callback executes completely
  console.log("SERIALIZAING:");
  done(null, user.google_id);
});

passport.deserializeUser((id, done) => {
  const query = {
    text: "SELECT * FROM USERS WHERE google_id=$1",
    values: [id],
  };

  console.log("DESERIALZIAING::");

  pool.query(query).then((res) => {
    done(null, res.rows[0]);
  });
});
