const validateCPF = require("./cpfValidator")

test("CPF 705.484.450-52 is valid", () => {
    expect(validateCPF("705.484.450-52")).toBe("valid")
})