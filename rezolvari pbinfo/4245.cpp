#include<fstream>
using namespace std;

ifstream fin("sumaoni.in");
ofstream fout("sumaoni.out");
int main()
{
    int s; fin >> s;
    int st = 1,dr = 1000,n = 0;

    while(st <= dr)
        {
            int mid = st + (dr - st) / 2;
            int sg = mid * (mid + 1) / 2;
            if(sg >= s)
                {
                    n = mid;
                    dr = mid - 1;
                }

            else
                {
                    st = mid + 1;
                }
        }

    int diff = n * (n + 1) / 2 - s;
    while(diff & 1)
        {
            n++;
            diff = n * (n + 1) / 2 - s;

        }

    fout << n << '\n';
    if(diff == 0)
        return 0;

    if(diff / 2 <= n)
        {
            fout << diff / 2;
            return 0;
        }

    diff /= 2;
    for(int i = 1; i <= diff / 2  && i <= n; i++)
        {
            if(diff - i <= n && diff - i != i)
                {
                    fout << i << '\n' << diff - i;
                    return 0;
                }
        }
    
    fin.close();
    fout.close();
    return 0;//superpeace
}