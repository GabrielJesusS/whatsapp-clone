const changeTheme = (theme, setTheme) =>{
        theme === "light" ? setTheme("dark") : setTheme("light")
}

export default changeTheme;