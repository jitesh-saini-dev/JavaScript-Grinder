#include <bits/stdc++.h>
using namespace std;

string revstr(string str)
{
    string word = "";
    string result = "";

    for (int i = str.length() - 1; i >= 0; i--)
    {
        if (str[i] != ' ')
        {
            word = str[i] + word;
        }
        else
        {
            result += word + " ";
            word = "";
        }
    }

    result += word; // last word
    return result;
}

int main()
{
    string str = "I am so excited to see that";
    cout << revstr(str);
}
