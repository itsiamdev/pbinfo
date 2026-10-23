#include <fstream>
using namespace std;

ifstream cin("relativ.in");
ofstream cout("relativ.out");

int main()
{
    int n;
    cin >> n;
    int x;
    int cnt=0;
    int min=1000000001;
    long long int max=0 , s=0;
    for(int i = 0 ; i < n ; ++i)
    {
        cin >> x;
        if(x <= min)
        {
        if(s+x>max)
        max=s+x;
        cnt++ , min=x , s=x;
        }
        if(x>min)
        s+=x;
    }
    cout << cnt << endl << max;
}