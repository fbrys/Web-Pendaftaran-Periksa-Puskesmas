import React from 'react';

function Footer() {
  return (
    <div className=" fixed-bottom py-2 bg-green-500 shadow flex items-center dark:bg-gray-800 justify-center">
      <span className="text-sm text-white sm:text-center dark:text-gray-400">
        © 2022{' '}
        <a
          href="https://www.linkedin.com/in/febriansulistyo/"
          class="hover:underline"
        >
          KuroNeko™
        </a>
        . All Rights Reserved.
      </span>
    </div>
  );
}

export default Footer;
