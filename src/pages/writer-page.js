import React from 'react';
import { useApp } from '../context/AppContext';

function WriterPage() {
  const { contextUser } = useApp();
  const [userData, setUserData] = React.useState({});
  React.useEffect(() => {
    async function getWriter() {
      var bearer = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MjNjMGU3ZDc5Mjg3MzQ2ODU4ZDk2ZmQiLCJuYW1lIjoiTHVpcyBGY28iLCJsYXN0TmFtZSI6IlJvZHJpZ3VleiIsInJvbGUiOiJ3cml0ZXIiLCJpYXQiOjE2NDgxOTQ3ODcsImV4cCI6MTY0ODIzMDc4N30.-7YDd0G13w2XkVx5bMyPQWUP5JT2V9NpOLcf4cXqzuE';
      const resp = await fetch('http://localhost:8080/api/writers/iamluisro', {
        headers: {
          Authentication: bearer
        },
      }).then((res) => res.json());
      setUserData(resp);
    }

    getWriter();
  }, [contextUser.token]);
  return (
    <div>
      This is the writer page {JSON.stringify(contextUser)}{' '}
      <div>{JSON.stringify(userData)}</div>
    </div>
  );
}

export default WriterPage;
