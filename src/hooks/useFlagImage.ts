
export const useFlagImage = (countryCode: string) => {
  const getFlagUrl = (code: string): string => {
    return `https://flagcdn.com/w20/${code.toLowerCase()}.png`;
  };

  const getDefaultFlagUrl = (): string => {
    return getFlagUrl('ng'); // Nigeria as default
  };

  const handleFlagError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
    e.currentTarget.src = getDefaultFlagUrl();
  };

  return {
    flagUrl: getFlagUrl(countryCode),
    defaultFlagUrl: getDefaultFlagUrl(),
    handleError: handleFlagError,
  };
};

