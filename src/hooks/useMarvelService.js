import { useHttp } from './http.hook';

// TODO: refactor this methods, because it's have a copypaste
const useMarvelService = () => {
  const { request, process, setProcess, loading, error, clearError } =
    useHttp();

  const _server = {
    url: 'https://gateway.marvel.com:443/v1/public/',
    characters: 'characters',
    baseLimit: 9,
    comicsLimit: 8,
    baseOffset: 0,
    comics: 'comics',
    apiKeyIvan: 'c5d6fc8b83116d92ed468ce36bac6c62',
    apiKeyMail: 'b3252ae24667fd89a578925f8337c8d2',
    apiKeyGmail: 'af8551b0745198c417f5907893a2a765',
  };

  const getAllCharacters = async (offset = _server.baseOffset) => {
    const { url, characters, baseLimit, apiKeyGmail } = _server;

    const res = await request(
      `${url}${characters}?limit=${baseLimit}&offset=${offset}&apikey=${apiKeyGmail}`
    );

    return res.data.results.map(_transformCharacter);
  };

  const getAllComics = async (offset = _server.baseOffset) => {
    const { url, comics, comicsLimit, apiKeyGmail } = _server;

    const res = await request(
      `${url}${comics}?limit=${comicsLimit}&offset=${offset}&apikey=${apiKeyGmail}`
    );
    return res.data.results.map(_transformComics);
  };

  const getElementById = async (id, selector) => {
    const { url, apiKeyGmail } = _server;

    const res = await request(`${url}${selector}/${id}?apikey=${apiKeyGmail}`);

    if (selector === 'characters') {
      return _transformCharacter(res.data.results[0]);
    } else if (selector === 'comics') {
      return _transformComics(res.data.results[0]);
    }
  };

  const getCharacterByName = async (name) => {
    const { url, apiKeyGmail } = _server;

    const res = await request(
      `${url}characters?name=${name}&apikey=${apiKeyGmail}`
    );

    return res.data.results.map(_transformCharacter);
  };

  const _transformComics = (comics) => {
    const {
      id,
      title,
      thumbnail,
      urls,
      prices,
      description,
      pageCount,
      language = 'EN-RU',
    } = comics;

    const filteredDesc =
      description === '' || description === null
        ? `This Marvel comic doesn't have description.`
        : `${description.slice(0, 250)}...`;

    return {
      id,
      title,
      language,
      pages: pageCount,
      description: filteredDesc,
      thumbnail: `${thumbnail.path}.${thumbnail.extension}`,
      homepage: urls[0].url,
      comics: comics.items,
      price: prices[0].price,
    };
  };

  const _transformCharacter = (char) => {
    const { id, name, description, thumbnail, urls, comics } = char;

    const filteredDesc =
      description === ''
        ? `This Marvel character doesn't have description.\n Please, click the links`
        : description;

    return {
      id,
      name,
      description: filteredDesc,
      thumbnail: `${thumbnail.path}.${thumbnail.extension}`,
      homepage: urls[0].url,
      wiki: urls[1].url,
      comics: comics.items,
    };
  };

  return {
    getAllComics,
    getAllCharacters,
    getElementById,
    getCharacterByName,
    process,
    setProcess,
    loading,
    error,
    clearError,
  };
};

export default useMarvelService;
