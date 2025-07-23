import React from 'react';

function FooterList({ head, list }) {
  return (
    <>
      <h5 className='mb-4'>{head}</h5>
      {list.map((item, index) => (
        <div key={index} className='mb-3'>
          <a style={urlStyle} href={item.url}>{item.name}</a><br />
        </div>
      ))}
    </>
  );
}

const urlStyle = {
  textDecoration: "none",
  color: "grey"
};

export default FooterList;
