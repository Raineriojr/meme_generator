import memeMaker from '@erickwendel/meme-maker';

const options = {
  image: './img/image.jpg',
  outfile: './img/meme.jpg',
  topText: '',
  bottomText: 'FUNCIONOU!'
}

memeMaker(options).then(_ => {
  console.log("Imagem salva:", options.outfile);
}).catch(error => console.log(error));