#include <bits/stdc++.h>
using namespace std;

ifstream f("castel.in");
ofstream g("castel.out");

long long task, n, i, j, x, cnt, s, cuburi, a[5002];
int main()
{
    f >> task >> n;
    if(task == 1)
    {
        for(i = 1; i <= n; i++)
        {
            f >> x;
            if(x >= 0 && x <= 9)
                cnt++;
        }
        g << cnt;
    }
    else if(task == 2)
    {
        for(i = 1; i <= n; i++)
            f >> a[i];
        for(i = 1; cnt <= n; i++)
        {
            if(cnt + i <= n)
                cnt = cnt + i, x = i;
            else
                break;
        }
        g << x << " " << a[cnt];
    }
    else
    {
        for(i = 1; i <= n; i++)
            f >> a[i];
        for(i = 1; x <= n; i++)
        {
            if(x + i <= n)
                x = x + i;
            else
                break;
        }
        j = 1;
        for(i = x - 1; i > 1;)
        {
            cnt++;
            s = s + (a[i - 1] + a[i]);
            if(cnt == j)
            {
                j++;
                i = i - 2;
                cuburi = cuburi + cnt;
                cnt = 0;
            }
            else
                i--;
        }
        g << cuburi << " " << s;
    }

    return 0;
}