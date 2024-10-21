const handleClick = () => {
    if (isActive) {
        setIsActive(false); // Остановить таймер
    } else {
        setIsActive(true); // Запустить таймер
    }
    setIsPink((prev) => !prev); // Переключаем изображение
};
