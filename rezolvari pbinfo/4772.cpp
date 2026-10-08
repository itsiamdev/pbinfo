#include <fstream>

using namespace std;

ifstream cin("catshow.in");
ofstream cout("catshow.out");

int main()
{
    int n, i, x, j, s, min = 42;
    cin >> n;
    for (i = 1; i <= n; i ++)
    {
        cin >> x;
        s = 0;
        for (j = 1; j <= x; j ++)
        {
            if (j == 1)
            {
                s += 15;
            }
            else
            {
                if (j == 2)
                {
                    s += 9;
                }
                else
                {
                    s += 4;
                }
            }
        }
        if (min > s / 10)
        {
            min = s / 10;
        }
    }
    cout << min;
    return 0;
}