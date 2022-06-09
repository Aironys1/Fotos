import './App.css';



function App() {
  const nome = "Filho";
  const materia = "meninão";
  
function soma(a,b){
  return a + b;
}


function ano(){
  return(
    "2022"
  )
}

const url = 'https://lh3.googleusercontent.com/ZXQ0pU6q3aIQAt9LWK04uGZkX9WfPXMRm26m5ht4Y5SZ7JmCIEOzBYpkxDFEPsL-AgCcT3do5qsFIMDVa6mmqN9JtOv77NxSuZChh8sE2UkdoF2dm8702qtTLA9S3vP6w_btbV1JOh95PCa2wJx8Wvsdfc5AWCCHqb_FdQqvIieWLYd4zPycXGgkfp4aW4M_KEfb-CQPLlRT8eZTnK0egNZMW0FG_jdYGbI2aCq4hN7O6AFFS21OCWMTrzHFYRp-m7cqIesDn1lPFa-X75Kvrfc8PNNUUj0ZZV2s3ULMDl7HK3CQDa-nsDEKJ83cvI-tGl1vGyEqm0zYi3YSHJnL6q0_MP45zuip9XDKCxkY0ygbmLkpQ2UXnYxOY5gMjQgx68205YPpONYxjhI1EWmPrSoCXIjjTFvO8g_7RsdCzdAqILUMbQ8Ch1jMlySvDyGsq_ehWjYjCtRS9cL5jCl-T56aSxkzA63TAlvqWmiO7IgXcQxLNn1ijSJasJprYlyiDVEJ6E_vqDd-_e7uKP6dMZ7WQHeGIKw3jDek5f_E2oU8OcP1Ed1tAbgGrfO_WYwSNkfajBWP7NpSvEIA0GgMbqU325MUOvJS-rPAPXFY8R9lMYwUYAjKPYCZUORmtFfT_cES4uTINBQarzb_vZqUlAMxEnoNVVd0ld1vm7MXOIhgPOCA_pRALK9YSw962B__m8nRgSYHtTPtE3dT4idGjW9YoB7yEA4_Ar8nwS3NGzGxzygCzYAFS50qEVqJT8_MYwLUXhTDgKpCI0I1QnMC4r8uQlzpU27wmLJMr9G1bkt0B2A-2qkcbQsGRFmTeSgQd8m0Xk_o=w1920-h864-no?authuser=0'

const url2 = 'https://lh3.googleusercontent.com/zQ03VnfPRzLlw5HzU5FHRTzreaHu35_iM8wkaVJenCXKnO4PHCezhu2BKhYqAWrfcQhN2CXfD2mJquaV7MdOdyglXn78XqvrVCnkDsdpxTn6hIlmwHBBFAFcrjiNaNZxU_FvSiwIctWK6Kv6tGJrVuCoWvZv7cAh5Z72A-dzoTw5O3rmVMlzNM4oUkrqKtoRnTdf2A2VjfPralmxI0ME55wTcr_mAETxTahN39kTIylDD1Sk8RYxW7fwZhHiwLKZGeCA2S2x9A7D1lJM_BP4LzGfSM_ltCrIs8siP4zagWm_nnlsm_vEigXKqg56sJN-gKqVnc5nYopT31OocWJhoof5mlvpVKNaSnhaW8Voy50X9LiY2_lTHLuWgkNId5hXS7IyPj6Ioted8bgdfNqDYQOk2SkTnoUdKqKP5FT0aJWBIs5TX7l_2spuPqY21hthuYzwa8Wm_b1E35uSinhd1UIEK74S2jgAIrxhXx8m2C55dYfZQri_VtPF9GrrP0_aSOWQsNhRZS00dwUa42e-LDXKEjbfSrEjivn7YJM-2BjFN-utAx8PzN8qygwX2oJbdqH6Qk8HJ-Xu8Jth2bpnmerTHjrhKqbaeBqxWtcaisjcR80lEU0DnXiKjR3vfliijmHFW3Mw-Xr1odPN3AUgIMUYv-Cm_13zD7Yi35aBbQvLlwTGHA6oKEJcmcXd8TzjfoxSpVhWlwrLe1otrODDU-msuaC-0BG-YCkn8_LnGeBqzgeOA9lW-hCrGpyo5vCVYsMCncdtn9X38X8Z1AoSw3zvBZLBhTIAOjmv2jJ-j7u54EUPWLl_hKnRYkGrWeqbVFkF1x1N=w1300-h975-no?authuser=0';

  
  return (


    <div className="App">
        <h1>Pai e  {nome}</h1>
        <p>Um dos momentos que eu tenho com meu {materia}</p>

        <p>Fotos {ano()}</p>
        <img src={url} alt="Imagem do curso" />
        <img className="img2" src={url2} alt="Imagem do curso" />

    </div>


  );
}

export default App;
