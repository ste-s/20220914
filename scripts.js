var num1, ope, num2;

function clique(qual)
{
    document.form.saida.value += qual;
}

function limpar()
{
    document.form.saida.value = "";
}

function op(tipo)
{
    num1 = parseFloat(document.form.saida.value);
    document.form.saida.value = "";
    ope = tipo
}

function res()
{
    num2 = parseFloat(document.form.saida.value);
    if (ope == 1)
    {
        document.form.saida.value = num1 + num2
    }
    else if (ope == 2)
    {
        document.form.saida.value = num1 - num2
    }
    else if (ope == 3)
    {
        document.form.saida.value = num1 * num2
    }
    else if (ope == 4)
    {
        document.form.saida.value = num1 / num2
    }

}